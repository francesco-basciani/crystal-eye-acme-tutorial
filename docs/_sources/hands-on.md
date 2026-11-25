# Run the exercise

:::{container} ce-page-lead
Run the Python cells from top to bottom to generate a burst, look for it in the counts, and estimate its incoming direction.
:::

[Launch on Binder](https://mybinder.org/v2/gh/francesco-basciani/crystal-eye-acme-tutorial/81d60271be8130dd3da0866933c0239b1625e72b?urlpath=lab/tree/book/notebook/Crystal-Eye-ACME-Python.ipynb)

Binder opens the notebook in JupyterLab with PyROOT and the workshop inputs ready. Wait for JupyterLab to load, then click **▶ Run** or press **Shift + Enter** to execute each cell. The plots appear below the cells as they run.

1. Run the setup cell once. In **Generate a burst**, run the default parameters, then try a zenith angle of **45°** or reduce the amplitude by a factor of ten.
2. In **Detection**, look for the burst in the noisy counts. Set **reveal_injected = True** and rerun the plot to compare your interpretation with the injected signal.
3. In **Localization**, compare the reconstructed detector-frame angles with the injected direction. The plot shows the retained templates and the reconstructed direction.

## Run locally

To work in your own Jupyter environment, download the {download}`notebook <notebook/Crystal-Eye-ACME-Python.ipynb>` and the {download}`Python module <notebook/crystal_eye_acme.py>` and keep them together. The [repository setup guide](https://github.com/francesco-basciani/crystal-eye-acme-tutorial#run-the-notebook) links to the workshop inputs.
