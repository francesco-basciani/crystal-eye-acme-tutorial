# Orbital background

:::{container} ce-page-lead
Where the counts come from before a burst arrives, and how that background varies across energy and detector pixels.
:::

The orbit assumed in the background study has an altitude of **550 km** and an inclination of **5°**. The simulation inputs cover seven components: cosmic photons, atmospheric albedo photons, albedo neutrons, secondary electrons, secondary positrons, secondary protons, and primary protons.

~~~{figure} ../figures/background-spectra.png
:alt: Energy spectra of the seven background components on logarithmic axes

Input energy and flux spectra for the background components.
~~~

~~~{figure} ../figures/background-geometry.png
:alt: Diagram of radiation incidence around the detector dome

Particle incidence geometries used for the background calculation.
~~~

The background calculation processes the simulated interactions and the energy–flux spectra. It produces count-rate histograms by energy for each component and their sum, plus the normalized background counts by detector pixel.

~~~{figure} ../figures/background-counts.png
:alt: Count rate versus energy for the total background and its components

Simulated detector count rates by energy and background component.
~~~

~~~{figure} ../figures/background-by-pixel.png
:alt: The background distribution plotted against detector pixel ID

Background across the detector pixels.
~~~

In the [Python detection exercise](../notebook/Crystal-Eye-ACME-Python.ipynb), watch how the counts fluctuate before the burst. Estimating and subtracting the mean still leaves positive and negative residuals.
