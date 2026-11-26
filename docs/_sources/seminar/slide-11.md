# Hit & Digit

## Primary particle generation

The generator selects a source surface, particle type and energy range suited to each simulation. It samples energies from a spectrum that is flat on a logarithmic scale. The analysis then normalizes the simulated events to the input spectrum for the scenario being studied.

## Hit information

A hit is the record of an interaction in a sensitive detector volume. For a calorimeter crystal, the simulation stores prompt and delayed deposits with their time, position and crystal ID. The anticoincidence tiles record prompt and delayed energy deposits and the tile ID. Each event also retains the primary particle’s PDG identifier, kinetic energy, generation position and direction.

## Digitization

Digitization is marked **to be determined** in the seminar. The planned step translates a Geant4 energy deposit into something comparable with a real analog-to-digital converter (ADC) channel. It models scintillation light, the photons collected by the SiPM, and their conversion to photoelectrons with the detector efficiency. The readout model then accounts for the gain when calculating the signal amplitude and pulse shape. Calibration information then determines the digitized channel response.

[Geant4 guide to digitization](https://geant4.web.cern.ch/documentation/dev/bfad_html/ForApplicationDevelopers/Detector/digitization.html)

*Sarkar R. · CE-simulation · Slide 11 of 29*
