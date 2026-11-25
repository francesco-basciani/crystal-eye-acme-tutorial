# Detector simulation

:::{container} ce-page-lead
How the detector model turns particle interactions into a set of reusable simulation products.
:::

The workshop uses detector responses calculated with **Geant4**. The simulation models how gamma rays and other particles interact with the instrument and records the energy deposited in its pixels.

~~~{figure} ../figures/detector-geometry.png
:alt: Crystal Eye dome with its outer pixels and internal layers exposed

Model of the Crystal Eye detector in the Geant4 simulation.
~~~

| Product | What it describes | Role in the exercise |
| --- | --- | --- |
| [Background](background.md) | Count rates from particles and radiation in orbit | Predicts the count level before the burst |
| [Effective area](response.md#effective-area) | Response versus energy and zenith angle | Helps estimate the spectrum for template comparison |
| [Templates](response.md#response-templates) | Energy deposition by pixel for known directions | Provides patterns for generating and localizing a burst |
