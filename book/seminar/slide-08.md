# Simulation Technique

## Simulation workflow

The simulation follows three steps. A CAD model defines the geometry. Geant4 simulates how particles interact with its materials. ROOT is then used to analyze the simulated events and produce quantities such as count distributions.

## Digitization and basic event selection

The example applies an energy-deposit threshold above **30 keV** in a crystal and above **7 keV** in an anticoincidence-system (ACS) tile. Those thresholds apply to individual deposits. The diagram then gives three separate conditions on the energy recorded in the detector layers.

| Region in the diagram | Basic event condition |
| --- | --- |
| Upper anticoincidence shield (yellow dashed arc) | Recorded energy below **200 keV** ($E_{\mathrm{ACS,upper}} < 200\,\mathrm{keV}$) |
| Bottom anticoincidence shield (green line) | No recorded energy deposit ($E_{\mathrm{ACS,bottom}} = 0\,\mathrm{keV}$) |
| Outer and inner calorimeter layers (magenta and blue) | Recorded energy in the outer layer greater than in the inner layer ($E_{\mathrm{CAL,outer}} > E_{\mathrm{CAL,inner}}$) |

~~~{figure} ../figures/seminar/figure-08-2.webp
:alt: Basic trigger conditions with a color-coded detector-layer diagram
:figclass: ce-seminar-figure

The colors match each energy condition in the table to its detector layer.
~~~

## Topological trigger

The topological trigger tests the pattern across neighboring crystals. In the configuration shown, energy must be deposited in at least one outer crystal and in neighboring crystals in the outer or inner layer. The highlighted crystals illustrate that spatial requirement.

~~~{figure} ../figures/seminar/figure-08-1.webp
:alt: Geant4 detector dome highlighting neighboring crystal interactions
:figclass: ce-seminar-figure

Geant4 detector dome highlighting neighboring crystal interactions.
~~~

[Detector simulation exercise reference](../theory/detector.md)

*Sarkar R. · CE-simulation · Slide 8 of 29*
