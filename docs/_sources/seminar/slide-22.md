# Transient Triggering: Neural Network

:::{note} Preliminary
The source labels these study results as preliminary.
:::

## Pixel counts and preliminary trigger result

The neural-network example uses the count rate in each detector pixel. The inputs include simulations of background alone and simulations that add a source at one of several sky locations. The goal is to distinguish these cases from their patterns across the detector.

~~~{figure} ../figures/seminar/figure-22-1.webp
:alt: Preliminary neural-network trigger diagram with input maps, network layers and 988/990 annotation
:figclass: ce-seminar-figure

Preliminary neural-network trigger diagram with input maps, network layers and 988/990 annotation.
~~~

The training labels identify **class 0** as background alone (BKG) and **class 1** as a source plus background (SRC+BKG). The network diagram shows **126 pixel inputs** feeding a dense layer of **10 neurons** and then **one output neuron**. The plot annotates a **988/990** result and marks it as **preliminary**.

*Sarkar R. · CE-simulation · Slide 22 of 29*
