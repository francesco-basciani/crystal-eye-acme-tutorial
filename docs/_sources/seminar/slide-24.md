# Transient Localization

## Onboard localization

The onboard localization concept has two tasks. It estimates a sky direction for a candidate transient, then provides that direction in a prompt alert so other observatories can look for the counterpart. The seminar describes a sub-second alert as a design objective.

## Detector responses and localization methods

The template approach compares the measured pixel count pattern with the responses expected for different source directions. The seminar uses a Kolmogorov–Smirnov (KS) comparison to score the agreement between the sample and each template.

~~~{figure} ../figures/seminar/figure-24-1.webp
:alt: External and intrinsic background maps, 45-degree burst and total response with a shared color scale
:figclass: ce-seminar-figure

External and intrinsic background maps, 45-degree burst and total response with a shared color scale.
~~~

The figure distinguishes **external background**, **intrinsic background**, the contribution from a **GRB at 45°**, and the **total**. The color scale is shared so the contribution of each component can be compared.

The seminar also describes a convolutional neural network as an alternative intended to produce a direction estimate faster.

*Sarkar R. · CE-simulation · Slide 24 of 29*
