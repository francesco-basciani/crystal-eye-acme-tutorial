# Sensitivity and Transient (GRB) Detection

## Signal-to-noise ratio

Sensitivity is about how clearly the source counts stand out above counting fluctuations. The seminar uses the following signal-to-noise estimate.

$$
N_\sigma = \frac{N_S}{\sqrt{N_S + N_B}}.
$$

$N_B$ is the simulated background count in a **2 s** observation. $N_S$ is the expected source count obtained from the Fermi-GBM spectra cataloged by Poolakkil et al. (2021). The comparison evaluates Band and Comptonized fits, as well as a Band model constructed from the Comptonized parameters with an added second index.

## Minimum detectable flux

Solving for the source contribution at a chosen significance gives the **minimum detectable flux**. The expression relates that threshold to the detector effective area, the energy bin, the accumulation time and the background.

$$
\Phi_{\min,\mathrm{trn}}(E)=
0.5\frac{N_\sigma^2}{A_{\mathrm{eff}}(E)\,\Delta E\,\Delta T}
\left(1+\sqrt{1+\frac{4B(E)\,\Delta T}{N_\sigma^2}}\right).
$$

For this comparison the burst is held at detector zenith. The seminar uses roughly **2,300 spectra** from the ten-year Fermi-GBM catalog.

[The ten-year Fermi-GBM spectral catalog](https://doi.org/10.3847/1538-4357/abf24d)

~~~{figure} ../figures/seminar/figure-18-1.webp
:alt: Simulated minimum detectable flux compared with average gamma-ray burst spectra
:figclass: ce-seminar-figure

Simulated minimum detectable flux compared with average gamma-ray burst spectra.
~~~

The graph shows the Crystal Eye minimum detectable flux for $N_\sigma=3$ alongside average Fermi-GBM burst spectra. Compare the curves at the same photon energy to see where a modeled spectrum lies relative to the sensitivity threshold.

*Sarkar R. · CE-simulation · Slide 18 of 29*
