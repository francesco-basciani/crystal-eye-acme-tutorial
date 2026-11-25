"""Python ports of the ACME live exercises. PyROOT provides ROOT I/O and primitives."""

from array import array
from dataclasses import dataclass
from pathlib import Path
from uuid import uuid4

import numpy as np
import ROOT


def root_object(file, name, kind):
    obj = file.Get(name)
    if not obj or not obj.InheritsFrom(kind):
        raise ValueError(f"{file.GetName()}: expected {kind} named {name}")
    return obj


def root_input(folder, filename):
    return ROOT.TFile.Open(str(Path(folder) / filename), "READ")


def detached_clone(histogram):
    copy = histogram.Clone(uuid4().hex)
    copy.SetDirectory(0)
    return copy


def direction(theta, phi):
    result = ROOT.TVector3()
    result.SetMagThetaPhi(1, np.deg2rad(theta), np.deg2rad(phi))
    return result


def angles(vec):
    return float(np.rad2deg(vec.Theta())), float(np.rad2deg(vec.Phi()) % 360)


def template_positions(file):
    tree = root_object(file, "tLocInfo", "TTree")
    return [(float(row.theta), float(row.phi)) for row in tree]


def template_weights(positions, theta, phi):
    requested = direction(theta, phi)
    nearby = sorted((np.float32(np.rad2deg(requested.Angle(direction(t, p)))), t, p)
                    for t, p in positions)
    if nearby[0][0] == 0:
        return [(nearby[0][1], nearby[0][2], np.float32(1))]
    a, b, c = [direction(t, p) for _, t, p in nearby[:3]]
    count = 2 if abs(a.Dot(b.Cross(c))) < 1e-9 else 3
    nearest = nearby[:count]
    weights = [np.float32(1.0 / float(distance)) for distance, _, _ in nearest]
    total = sum(weights, np.float32(0))
    return [(t, p, weight / total) for (_, t, p), weight in zip(nearest, weights)]


@dataclass
class SourceResponse:
    pixels: object
    energy: object
    templates: list


def generate_grb(folder, theta=0, phi=0, amplitude=0.026, index=-1.07, cutoff_kev=756.4):
    """Port CEGenGRB: combine template event prefixes and apply a cut-off power law."""
    if (not np.isfinite([theta, phi, amplitude, index, cutoff_kev]).all()
            or not 0 <= theta <= 115 or not 0 <= phi < 360 or amplitude <= 0 or cutoff_kev <= 0):
        raise ValueError("Use 0 ≤ theta ≤ 115, 0 ≤ phi < 360, and positive amplitude and cutoff.")

    low = np.float32(np.log10(30))
    step = (np.float32(5) - low) / np.float32(100)
    edges = array("f", [10.0 ** float(low + np.float32(i) * step) for i in range(101)])
    pixels = ROOT.TH1F(uuid4().hex, "", 126, 0, 126)
    energy = ROOT.TH1F(uuid4().hex, "", 100, edges)
    pixels.SetDirectory(0)
    energy.SetDirectory(0)
    spectrum = ROOT.TF1(uuid4().hex, "[0]*((x/100)**[1])*exp(-([1]+2)*x/[2])", 20, 1e6)
    spectrum.SetParameters(*[float(np.float32(x)) for x in (amplitude, index, cutoff_kev)])

    selected = []
    with root_input(folder, "templates5deg.root") as templates:
        weighted = template_weights(template_positions(templates), np.float32(theta), np.float32(phi))
        suffixes = [(f"{int(t)}_{int(p)}", weight) for t, p, weight in weighted]
        primary = [root_object(templates, f"hPeng_{suffix}", "TH1F") for suffix, _ in suffixes]
        if len({hist.GetEntries() for hist in primary}) != 1:
            raise ValueError("Primary-energy template entry counts differ.")
        mean = detached_clone(primary[0])
        mean.Reset()
        for hist, (_, weight) in zip(primary, suffixes):
            mean.Add(hist, float(weight))

        rate = np.zeros(mean.GetNbinsX() + 2, dtype=np.float32)
        for i in range(1, mean.GetNbinsX() + 1):
            count = mean.GetBinContent(i)
            if count:
                low_edge = mean.GetBinLowEdge(i)
                rate[i] = 1296 * spectrum.Integral(low_edge, low_edge + mean.GetBinWidth(i)) / count

        # Branch names contain literal brackets in the supplied ROOT trees.
        for (t, p, weight), (suffix, _) in zip(weighted, suffixes):
            tree = root_object(templates, f"tEdepPix_{suffix}", "TTree")
            entries = int(np.float32(tree.GetEntries()) * weight)
            selected.append((t, p, float(weight), entries))
            tree.SetBranchStatus("*", 0)
            for name in ("peng", "totEdep", "pixID[px]", "pixEdep[px]"):
                tree.SetBranchStatus(name, 1)
            for i in range(entries):
                tree.GetEntry(i)
                deposited = tree.totEdep
                norm = float(rate[mean.FindBin(tree.peng)])
                ids, deposits = getattr(tree, "pixID[px]"), getattr(tree, "pixEdep[px]")
                if len(ids) != len(deposits) or (len(ids) and deposited <= 0):
                    raise ValueError(f"Invalid energy deposit in {suffix} event {i}.")
                for pixel, deposit in zip(ids, deposits):
                    fraction = float(np.float32(deposit) / np.float32(deposited))
                    pixels.Fill(pixel, fraction * norm)
                energy.Fill(deposited, norm)
    return SourceResponse(pixels, energy, selected)


def lightcurve(folder, response, seed=2026):
    """Port CELightcurve's seeded Gaussian light curve and legacy trigger."""
    if type(seed) is not int or not 0 < seed < 2**32:
        raise ValueError("Choose a nonzero 32-bit integer seed.")
    with root_input(folder, "allBackground.root") as file:
        background_rate = np.float32(root_object(file, "hTotBkg", "TH1F").Integral())
    width, window, span, onset = 0.25, 8.0, 30.0, 10.0
    pulse = ROOT.TF1(uuid4().hex, lambda t, _: (
        np.exp(1 - 0.5 / (t[0] - onset) - (t[0] - onset) / 2) if t[0] > onset else 0
    ), -window, span, 0)
    source_rate = response.energy.Integral()
    expected_background = float(background_rate) * width
    random = ROOT.TRandom3(seed)
    starts = np.arange(0, span, width)
    expected_source = np.empty_like(starts)
    observed = np.empty(starts.size, dtype=np.float32)
    for i, start in enumerate(starts):
        expected_source[i] = source_rate * pulse.Integral(start, start + width)
        mean = expected_background + expected_source[i]
        observed[i] = random.Gaus(mean, np.sqrt(mean))
        # The original draws a separate overlapping-window sample on each step.
        integrated = background_rate * window + source_rate * pulse.Integral(start + width - window, start + width)
        random.Gaus(integrated, np.sqrt(integrated))

    bins = int(window / width)
    consecutive = 0
    triggers = []
    for i in range(bins, len(observed)):
        if not consecutive:
            past = np.float32(np.sum(observed[i - bins:i], dtype=np.float64))
            threshold = 3 * np.sqrt(past)
            trigger_start = starts[i]
        excess = observed[i] - past / bins
        consecutive = consecutive + 1 if excess > threshold else 0
        if consecutive == 3:
            triggers.append(float(trigger_start))
    return starts + width / 2, observed, expected_background, expected_source, triggers


@dataclass
class Localization:
    theta: float
    phi: float
    centroid_theta: float
    centroid_phi: float
    scores: np.ndarray
    retained: np.ndarray


def localize(folder, response):
    """Port CELoc: use the ROOT histogram KS score, then average retained directions."""
    coords = np.loadtxt(Path(folder) / "upCal.txt", dtype=np.float32)
    pixel_hist = response.pixels
    weights = np.array([pixel_hist.GetBinContent(i + 1) for i in range(len(coords))])
    if not np.isfinite(weights).all() or weights.sum() <= 0:
        raise ValueError("No usable source counts for localization.")
    centroid = ROOT.TVector3(*(weights @ coords[:, 1:]))
    centroid_theta, centroid_phi = angles(centroid)
    energy = detached_clone(response.energy)
    with root_input(folder, "allEffArea.root") as file:
        effective = root_object(file, f"hEffArea{int(min(90, centroid_theta))}", "TH1F")
        energy.Divide(effective)
    ny_energy = energy.GetNbinsX()
    for j in range(1, ny_energy + 1):
        energy.SetBinContent(j, energy.GetBinContent(j) / energy.GetBinWidth(j))
    flux = np.array([energy.GetBinContent(j) for j in range(ny_energy + 2)])
    errors = [pixel_hist.GetBinError(i + 1) for i in range(pixel_hist.GetNbinsX())]

    scores = []
    with root_input(folder, "temEdepPix2degNew.root") as templates:
        for t, p in template_positions(templates):
            hist = root_object(templates, f"hEdepPix_{int(t)}_{int(p)}", "TH2F")
            nx, ny = hist.GetNbinsX(), hist.GetNbinsY()
            if ny != ny_energy or nx != len(errors):
                raise ValueError("Template dimensions do not match the sample response.")
            # ROOT stores X fastest. ProjectionX includes the Y flow bins.
            storage = np.frombuffer(hist.GetArray(), dtype=np.float32, count=hist.GetNcells())
            storage = storage.reshape(ny + 2, nx + 2)
            storage[1:-1, 1:-1] *= flux[1:-1, None]
            projection = hist.ProjectionX(uuid4().hex)
            projection.SetDirectory(0)
            ROOT.SetOwnership(projection, True)
            for i, error in enumerate(errors, 1):
                projection.SetBinError(i, error)
            scores.append((t, p, np.float32(pixel_hist.KolmogorovTest(projection))))
            del storage, projection
            # Release each loaded histogram instead of keeping 2° templates in memory.
            hist.SetDirectory(0)
            ROOT.SetOwnership(hist, True)
            del hist

    scores = np.array(scores)
    if not len(scores) or not np.isfinite(scores[:, 2]).all() or scores[:, 2].max() <= 0:
        raise ValueError("No comparable localization templates.")
    # Apply the original relative cut without erasing from the vector during traversal.
    retained = scores[:, 2] >= 0.01 * scores[:, 2].max()
    result = ROOT.TVector3()
    for t, p, score in scores[retained]:
        result += score * direction(t, p)
    if result.Mag2() == 0:
        raise ValueError("The weighted direction is degenerate.")
    theta, phi = angles(result)
    return Localization(theta, phi, centroid_theta, centroid_phi, scores, retained)
