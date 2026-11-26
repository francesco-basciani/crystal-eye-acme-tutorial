# Transient Sources (GRB)

## Comptonized spectrum

A burst model needs to specify both the spectrum and the evolution in time. The first equation uses a **Comptonized spectrum**, a power law with an exponential cut-off, to describe the incident photon flux.

$$
\Phi_{\mathrm{comp}}(E)=A\left(\frac{E}{100\,\mathrm{keV}}\right)^\alpha\exp\!\left[-\frac{(\alpha+2)E}{E_{\mathrm{peak}}}\right].
$$

Here $\Phi_{\mathrm{comp}}(E)$ is the flux at energy $E$. The amplitude $A$ sets its scale, $\alpha$ sets the power-law index and $E_{\mathrm{peak}}$ is the peak energy parameter.

~~~{figure} ../figures/seminar/figure-17-1.webp
:alt: Fermi-GBM spectral sample with the original dataset annotation
:figclass: ce-seminar-figure

Fermi-GBM spectral sample with the original dataset annotation.
~~~

The spectrum figure shows the range of shapes in the seminar’s ten-year Fermi-GBM sample, based on about **2,300 GRBs**.

## Norris pulse

The **Norris pulse** describes how the flux rises and falls with time. The expression shown applies after the onset $t_s$.

$$
I(t)=A\lambda\exp\!\left(-\frac{\tau_1}{t-t_s}-\frac{t-t_s}{\tau_2}\right),\qquad t>t_s .
$$

In the equation, $I(t)$ is the flux at time $t$, $A$ sets the scale, $\tau_1$ governs the rise and $\tau_2$ the decay. The normalization factor is $\lambda=\exp(2\sqrt{\tau_1/\tau_2})$.

~~~{figure} ../figures/seminar/figure-17-2.webp
:alt: Norris light curve with its annotated start, rise and decay parameters
:figclass: ce-seminar-figure

Norris light curve with its annotated start, rise and decay parameters.
~~~

The light curve illustrates the model with an onset of **8 s**, a rise parameter of **0.5 s**, and a decay parameter of **2 s**.

## Detector pixel response

The final figure fixes the incoming direction at $\theta=45^\circ$ and $\phi=0^\circ$. The resulting pattern across pixels is the information used later to estimate the direction.

~~~{figure} ../figures/seminar/figure-17-3.webp
:alt: Simulated burst pixel response with source direction and color scale
:figclass: ce-seminar-figure

Simulated burst pixel response with source direction and color scale.
~~~

[Generate a burst in the Python notebook](../notebook/Crystal-Eye-ACME-Python.ipynb)

*Sarkar R. · CE-simulation · Slide 17 of 29*
