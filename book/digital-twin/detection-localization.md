# Detection and localization

:::{container} ce-page-lead
Detection looks for an excess in time. Localization uses the distribution of the excess across the detector to estimate a sky direction.
:::

## Detection asks when the burst occurred

Start with the background. In **Adaptive Background Analysis**, the public simulator offers a deterministic reference and a **Simulation** mode with Poisson fluctuations. In **Simulation**, the visible environmental components in the model set the background level. The upper plot shows counts in 0.2 s bins and an adaptive background estimate. The lower plot shows the signed difference between the observed counts and the background prediction for the bin.

Even before a burst, statistical fluctuations can produce positive excursions. When a burst is injected, compare the size and duration of the excess with the fluctuations you saw beforehand. A brighter burst can be easier to distinguish, but one excursion alone tells you little about the direction.

The demonstration marks the known injection time and uses that information to skip background updates in bins with injected signal. This lets us inspect the behavior of the estimator in a controlled exercise. The [seminar section on detection](../seminar/slide-20.md) gives the wider scientific context.

## Localization asks where the burst came from

Open **Burst Direction Reconstruction** after the event. In this panel, the public simulator demonstrates a centroid using the expected responses at the selected peak frame. For each pixel, it subtracts the expected background from the total expected response. A positive difference gives that pixel a weight. Pixels with stronger excesses therefore pull the estimated direction more strongly toward their outward normals.

For pixel $i$, let $C_i$ and $B_i$ be its total and background expected counts in the frame, and let $\hat{\mathbf n}_i$ be its outward unit vector. The estimate in the detector frame is

$$
w_i = \max(0, C_i - B_i), \qquad
\hat{\mathbf d} = \frac{\sum_i w_i\hat{\mathbf n}_i}
{\left\|\sum_i w_i\hat{\mathbf n}_i\right\|}
$$

when the weighted sum is nonzero. The simulator rotates the result into sky coordinates and reports right ascension and declination. It uses the injected direction to compute the angular separation after reconstruction, so you can compare the estimate with the input.

## Compare the two exercises

In the simulator, the centroid makes the role of each pixel direction easy to explain. In the [Python notebook](../notebook/Crystal-Eye-ACME-Python.ipynb), the localization exercise compares the pixel pattern with simulated templates. Both use the spatial response, with different ways of inferring the direction. After a run, compare the count excess and the angular separation as two different outcomes.

[Try both steps in the embedded simulator](simulator.md)
