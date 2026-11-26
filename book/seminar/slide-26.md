# Real-time Onboard Transient Localization (with Neural Network)

## Input source locations

The CNN uses a two-dimensional image derived from the hit map on the three-dimensional detector. The training example begins with simulated sources whose positions are sampled uniformly in direction.

~~~{figure} ../figures/seminar/figure-26-1.webp
:alt: Uniform random source locations in the detector frame
:figclass: ce-seminar-figure

Uniform random source locations in the detector frame.
~~~

## From detector pixels to CNN inputs

The figure follows the same simulated response through the three stages used to prepare the CNN input.

~~~{figure} ../figures/seminar/figure-26-2.webp
:alt: Three-dimensional pixel map, projected pixel map and tiled CNN input, with their connections
:figclass: ce-seminar-figure

Three-dimensional pixel map, projected pixel map and tiled CNN input, with their connections.
~~~

The first panel shows the signal on the detector pixels, the second projects the pattern onto a plane, and the third tiles it into the **80 × 80 pixel** input image. Compare the colored regions across the panels to follow how the input preserves the spatial pattern.

*Sarkar R. · CE-simulation · Slide 26 of 29*
