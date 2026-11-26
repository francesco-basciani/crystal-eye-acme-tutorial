# Geometry Construction

## Geometry and sensitive volumes

The Geant4 model imports CAD files for the upper and lower crystals, the top and bottom anticoincidence-system (ACS) tiles, and the structure that holds them. The simulation assigns GAGG or LYSO to the crystals, plastic scintillator to the ACS tiles, and aluminum and Windform to the supporting structure.

The crystals and ACS tiles are assigned different sensitive-detector classes. That lets the simulation record calorimeter energy deposits separately from signals in the veto. The cutaway shows how those volumes fit together.

[Geant4 guide to sensitive detectors and hits](https://geant4.web.cern.ch/documentation/dev/bfad_html/ForApplicationDevelopers/Detector/hit.html)

~~~{figure} ../figures/seminar/figure-09-1.webp
:alt: Constructed detector geometry showing the crystals and anticoincidence tiles
:figclass: ce-seminar-figure

Constructed detector geometry showing the crystals and anticoincidence tiles.
~~~

*Sarkar R. · CE-simulation · Slide 9 of 29*
