# Run the exercise

:::{container} ce-page-lead
Run the Python cells from top to bottom to generate a burst, look for it in the counts, and estimate its incoming direction.
:::

[Open the student notebook →](notebook/Crystal-Eye-ACME-Python.ipynb)

The code and instructions are available in the book. To generate the plots, download the {download}`notebook <notebook/Crystal-Eye-ACME-Python.ipynb>` and its {download}`Python module <notebook/crystal_eye_acme.py>`, keep them together, and open the notebook in Jupyter.

Use a Python kernel with PyROOT, NumPy and Matplotlib. Set `ACME_TUTORIAL_DIR` to the folder containing the five tutorial inputs, as described in the [repository setup guide](https://github.com/francesco-basciani/crystal-eye-acme-tutorial#run-the-notebook).

1. Run the setup cell once. In **Generate a burst**, run the default parameters, then try a zenith angle of **45°** or reduce the amplitude by a factor of ten.
2. In **Detection**, look for the burst in the noisy counts. Set **reveal_injected = True** and rerun the plot to compare your interpretation with the injected signal.
3. In **Localization**, compare the reconstructed detector-frame angles with the injected direction. The plot shows the retained templates and the reconstructed direction.
