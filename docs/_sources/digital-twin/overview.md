# The Crystal Eye Digital Twin

:::{container} ce-page-lead
The Crystal Eye Digital Twin is an interactive virtual counterpart of the proposed instrument. It brings the orbit, the detector geometry and the simulated detector response into one environment, so we can follow a gamma-ray burst from its arrival to the reconstructed direction.
:::

## From orbital geometry to detector counts

Where the instrument is and where it points determine how a source is seen by its pixels. The simulator replays a time-stamped orbital scenario and shows the positions of the satellite, Earth, Sun and Moon. In the same scene, the segmented detector shows how the response varies across its pixels. The orbital view gives those differences a physical context. Two sources at different angles can produce different patterns even if they lead to similar total counts.

When we introduce a gamma-ray burst (GRB), the simulator combines its expected response with the background for the selected scenario. We can then examine the time series of counts and the spatial distribution across pixels. The first helps us decide **when** to look for an excess. The second helps us estimate **where** it came from.

:::{figure} ../figures/detector-geometry.png
:alt: Geant4 geometry showing the segmented Crystal Eye detector
:width: 75%
:align: center

The segmented Crystal Eye geometry. Localization uses information from individual pixels, while the time-series view combines counts across the detector.
:::

## What we can test in the seminar

Because we choose the injected direction and intensity, we can hold one input fixed while changing another. Keep the direction fixed and reduce the intensity to see how an excess becomes harder to spot. Then change the direction and compare how the response is distributed across the detector. The known injection provides a reference for evaluating each run.

The seminar uses orbital replay and modelled counts. A comparison with the injected direction measures performance for that simulated event.

[Follow the counts and reconstruct a direction](detection-localization.md) · [Open the simulator in the book](simulator.md)
