# Effective Area

## Simulation geometry

~~~{figure} ../figures/seminar/figure-15-1.webp
:alt: Effective-area simulation geometry with incident rays and source plane
:figclass: ce-seminar-figure

Effective-area simulation geometry with incident rays and source plane.
~~~

$$
A_{\mathrm{eff}} = \frac{N_{\mathrm{sel}}}{N_{\mathrm{sim}}} A_{\mathrm{src}}.
$$

The simulation sends particles from a source surface of area $A_{\mathrm{src}}$. Out of the $N_{\mathrm{sim}}$ particles thrown, $N_{\mathrm{sel}}$ pass the event selection. Multiplying the geometric area by that fraction gives the effective area. It describes the response to the incident flux for the energy and direction being simulated.

## Response versus angle and at zenith

The map varies energy and the source angle $\theta$ relative to the detector. Its annotated Earth limb helps orient the reader when comparing incidence angles.

~~~{figure} ../figures/seminar/figure-15-2.webp
:alt: Effective area versus energy and source position with the Earth limb marked
:figclass: ce-seminar-figure

Effective area versus energy and source position with the Earth limb marked.
~~~

The zenith plot takes a single slice at $\theta=0^\circ$. Use it to read how the effective area changes with energy when the source is directly above the detector axis.

~~~{figure} ../figures/seminar/figure-15-3.webp
:alt: Effective-area curves at zenith
:figclass: ce-seminar-figure

Effective-area curves at zenith.
~~~

The seminar presents the geometry as a way to maintain a large, relatively flat response across a range of energies and angles. The map and the zenith slice show different aspects of that design objective.

[Effective area and response templates](../theory/response.md)

*Sarkar R. · CE-simulation · Slide 15 of 29*
