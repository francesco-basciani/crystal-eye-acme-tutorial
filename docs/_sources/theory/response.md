# Effective area and response templates

:::{container} ce-page-lead
The effective area describes how much response to expect. The direction templates show where that response appears across the detector.
:::

## Effective area

The effective-area calculation estimates the effective area versus photon energy for zenith angles from **0° to 115°**, assuming azimuthal symmetry. The simulation sends plane-parallel photons from square source planes toward the detector. The output is a set of effective-area histograms in cm².

~~~{figure} ../figures/effective-area-geometry.png
:alt: Diagram with square photon source planes at different angles to the detector

Source plane geometry used for the effective-area simulations.
~~~

~~~{figure} ../figures/effective-area-curves.png
:alt: Effective area in square centimeters across photon energy and detector zenith angle

Effective-area map in the supplied outline.
~~~

## Response templates

The response-template bank organizes simulated responses for directions spaced by about **5°** for burst generation. It uses the direction list and a map linking the upper and lower crystal IDs. The output pairs each direction with the primary photon spectrum, deposited energy per event and per pixel, and a two-dimensional pixel-by-energy histogram.

~~~{figure} ../figures/template-directions.png
:alt: Grid of simulated reference directions spanning the detector field of view

Reference directions used to build the template bank.
~~~

The [Python burst generator](../notebook/Crystal-Eye-ACME-Python.ipynb) uses this bank to produce a detector energy spectrum and a count-rate distribution by pixel for a chosen direction and cut-off power law. Localization uses the separate **2° template bank** supplied with the tutorial. It compares the expected source pattern with templates using ROOT’s Kolmogorov–Smirnov histogram test and combines the retained directions.
