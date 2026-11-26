# Transient Localization: Using KS Test

## Template and sample source positions

The localization method prepares a bank of simulated detector responses for directions distributed across the sky. Each response is a template for the pixel pattern a source in that direction would produce. When a sample arrives, the method compares it with the bank. The number of templates influences both the angular sampling and the work required for each estimate. The seminar quotes a response time of roughly a second for this approach.

~~~{figure} ../figures/seminar/figure-25-1.webp
:alt: Reference source positions for localization templates
:figclass: ce-seminar-figure

Reference source positions for localization templates.
~~~

The sample source positions illustrate the directions used to check how well the template bank can recover an incoming direction.

~~~{figure} ../figures/seminar/figure-25-2.webp
:alt: Sample source locations used in the localization example
:figclass: ce-seminar-figure

Sample source locations used in the localization example.
~~~

## Template comparison and workflow

Start with the sample pixel map and its total spectrum. The centroid of the energy deposits gives an initial estimate of the angle to the detector axis. The method uses that angle to select an effective area and estimate the incident spectrum. It uses this spectrum to normalize each template’s pixel response before comparing the sample and template maps with the KS test. That comparison assigns a match score to each template direction.

The angle plot compares the **2°** and **5°** template grids. The **2°** curves carry angle markers at **1.25°** and **2.05°**. The **5°** curves carry markers at **2.35°** and **3.75°**.

~~~{figure} ../figures/seminar/figure-25-3.webp
:alt: Sample and template comparison curves
:figclass: ce-seminar-figure

Sample and template comparison curves.
~~~

~~~{figure} ../figures/seminar/figure-25-4.webp
:alt: Complete Kolmogorov–Smirnov localization flowchart
:figclass: ce-seminar-figure

Complete Kolmogorov–Smirnov localization flowchart.
~~~

[Run Localization in the Python notebook](../notebook/Crystal-Eye-ACME-Python.ipynb)

*Sarkar R. · CE-simulation · Slide 25 of 29*
