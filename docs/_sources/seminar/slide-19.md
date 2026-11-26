# High-sensitivity Transient Observations

:::{note} Preliminary
The source labels these study results as preliminary.
:::

## Signal-to-noise and flux

These preliminary comparisons use an accumulation time of **2 s**. The signal-to-noise ratio combines the expected burst and background counts.

$$
N_\sigma = \frac{N_S}{\sqrt{N_S + N_B}}.
$$

The first plot uses Comptonized fits from the Fermi-GBM catalog to estimate the signal-to-noise ratio expected for those events in Crystal Eye.

~~~{figure} ../figures/seminar/figure-19-1.webp
:alt: Preliminary signal-to-noise distribution from the Fermi-GBM catalog
:figclass: ce-seminar-figure

Preliminary signal-to-noise distribution from the Fermi-GBM catalog.
~~~

The next plot holds an average Comptonized spectrum at detector zenith and changes the integrated burst flux. The annotated points are part of the preliminary result shown on the slide.

~~~{figure} ../figures/seminar/figure-19-2.webp
:alt: Preliminary signal-to-noise versus flux at zenith, with annotated thresholds
:figclass: ce-seminar-figure

Preliminary signal-to-noise versus flux at zenith, with annotated thresholds.
~~~

The zenith plot reads approximately **0.65 photons cm⁻² s⁻¹ at 3σ** and **1.10 photons cm⁻² s⁻¹ at 5σ** on a flux axis integrated over **0.01–30 MeV**. The table marks **50–300 keV** as the comparison band for the high-SNR flux threshold. Those energy bands belong to different comparisons.

## Comparison with Fermi-GBM

The table compares thresholds and estimated short-GRB rates for Fermi-GBM and Crystal Eye. Its rows apply different selection criteria, so compare the two instruments within each row.

~~~{figure} ../figures/seminar/figure-19-3.webp
:alt: Preliminary sensitivity comparison with Fermi-GBM
:figclass: ce-seminar-figure

Preliminary sensitivity comparison with Fermi-GBM.
~~~

|  | Fermi-GBM | Crystal Eye |
| --- | --- | --- |
| High SNR Threshold (SNR&gt;25) | 4.0 ph/cm<sup>2</sup>/s | 1.8 ph/cm<sup>2</sup>/s |
| “Golden Sample” (SNR&gt;25) sGRBs/year | 16.13 | 20.55 |
| Bright sGRBs (SNR&gt;60, High fluence) sGRBs/year | 0.84 | 0.36 |
| 5s Trigger Threshold | 0.8 ph/cm<sup>2</sup>/s | 0.3 ph/cm<sup>2</sup>/s |
| Estimated Total Triggered sGRBs/year | 30 | 60 |

~~~{figure} ../figures/seminar/figure-19-4.webp
:alt: Preliminary sensitivity curves by energy
:figclass: ce-seminar-figure

Preliminary sensitivity curves by energy.
~~~

The plots and table are marked **preliminary** in the source. Their rates are estimates for the study assumptions.

*Sarkar R. · CE-simulation · Slide 19 of 29*
