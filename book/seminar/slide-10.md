# Physics List

## Prompt interactions

The physics list determines which interactions Geant4 can simulate. For prompt electromagnetic interactions, it includes photoelectric absorption, Compton and Rayleigh scattering, gamma conversion, ionization, bremsstrahlung, multiple Coulomb scattering, annihilation and pair production.

The prompt hadronic configuration includes FTFP_BERT for inelastic processes, along with hadron elastic scattering, ion physics, and gamma-nuclear and lepto-nuclear interactions. These processes let the same detector model handle photons and particles from the orbital environment.

## Radioactivity and activation

The simulation also accounts for radioactivation and radioactive decay. A particle interaction can leave an unstable nucleus in the detector material, which can decay later and contribute a delayed signal. The decay physics uses nuclear level data to model those processes.

*Sarkar R. · CE-simulation · Slide 10 of 29*
