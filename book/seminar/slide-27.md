# Real-time Onboard Transient Localization (with Neural Network)

## Network inputs and architecture

~~~{figure} ../figures/seminar/figure-27-1.webp
:alt: CNN architecture with layer labels and coordinate outputs
:figclass: ce-seminar-figure

CNN architecture with layer labels and coordinate outputs.
~~~

The diagram traces the **80 × 80 pixel** map through the input layer and the convolutional network. The labeled stages include Conv2D, ReLU, dropout and max pooling. The diagram shows a dense stage that maps 128 features to three Cartesian components $(X,Y,Z)$, which are then expressed as the angles $(\theta,\phi)$.

## GRB 170817A example

~~~{figure} ../figures/seminar/figure-27-2.webp
:alt: Multimessenger sky localization reference from the seminar
:figclass: ce-seminar-figure

Multimessenger sky localization reference from the seminar.
~~~

The upper reference panel is attributed to Kasliwal et al. in the seminar. It provides the context for comparing the instrument regions in the next figure.

[Kasliwal et al., Science 358, 1559–1565 (2017)](https://pubmed.ncbi.nlm.nih.gov/29038373/)

~~~{figure} ../figures/seminar/figure-27-3.webp
:alt: GRB 170817A localization comparison with instrument labels and uncertainty radii
:figclass: ce-seminar-figure

GRB 170817A localization comparison with instrument labels and uncertainty radii.
~~~

The **GRB 170817A** comparison labels the Fermi-GBM, LIGO and Crystal Eye (CE) regions. For the Crystal Eye example the slide reports uncertainty radii of approximately **1.2° at 68%** and **2.0° at 95%** confidence. These values belong to the example shown.

## Onboard processing

The onboard concept uses a lightweight CNN on a data processing unit (DPU) optimized for real-time analysis. The slide describes a processing time on the order of milliseconds, followed by the time needed to transmit the alert over the dedicated communications band.

*Sarkar R. · CE-simulation · Slide 27 of 29*
