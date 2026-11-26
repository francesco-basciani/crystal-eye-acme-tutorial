# Transient Triggering: Classical

## Source and background counts

The classical trigger example starts from expected external background counts $N_b$ for an orbit at **550 km** and **50°** inclination. The source contribution $N_s$ comes from an average GRB spectrum based on Comptonized fits. Both contributions are integrated over the **8 s** accumulation interval in the slide.

The slide draws the total count $C_T$ from a Gaussian with mean $N_b+N_s$ and standard deviation $\sqrt{N_b+N_s}$. It writes the background term as $C_B=C_T-N_s$. This describes the construction in the seminar example.

## Trigger condition

For each accumulated time bin, the slide calculates $S/N=(C_T-C_B)/\sqrt{C_T}$. It requires $S/N>3$ in **three consecutive bins** when the source contributes to more than five bins. The trigger delay is the time of significant detection minus the start of the event. The plotted example marks the trigger at **10.25 s** on the simulation time axis. The upper panel shows counts in **250 ms** bins. The lower panel shows the accumulated total and background over **8 s**. Compare the two panels to see how the count excess appears on each timescale.

~~~{figure} ../figures/seminar/figure-21-1.webp
:alt: Simulated gamma-ray burst light curve and classical trigger statistic
:figclass: ce-seminar-figure

Simulated gamma-ray burst light curve and classical trigger statistic.
~~~

[Run Detection in the Python notebook](../notebook/Crystal-Eye-ACME-Python.ipynb)

*Sarkar R. · CE-simulation · Slide 21 of 29*
