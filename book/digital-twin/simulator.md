# Run the simulator

:::{container} ce-page-lead
Watch the background fluctuate, inject one burst, and compare the reconstructed sky direction with the direction you supplied.
:::

<a href="https://francesco-basciani.github.io/crystal-eye-simulator/" target="_blank" rel="noopener">Open the simulator in a separate tab</a>

<div class="ce-simulator-embed">
  <iframe
    src="https://francesco-basciani.github.io/crystal-eye-simulator/"
    title="Interactive Crystal Eye Digital Twin simulator"
    loading="lazy"
  ></iframe>
</div>

## Run one trial

1. Select **Start simulation**. In **Adaptive Background Analysis**, select **Simulation** and watch a few bins before injecting a burst.
2. In the burst controls, set a direction and intensity, then select **Generate burst**. Use the upper plot to inspect the counts and the lower plot to compare the excursion with the background fluctuations.
3. Open **Burst Direction Reconstruction**. Compare the reconstructed RA and Dec with the injected coordinates and record the angular separation. If you want to see how the estimate was formed, follow the [centroid calculation](detection-localization.md#localization-asks-where-the-burst-came-from).

Repeat at a different intensity with the same direction, duration and other settings. Can you still recognize the excess in time? Read the angular separation separately to see how the direction estimate changed in your trials.
