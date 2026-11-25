# Run the exercise

:::{container} ce-page-lead
Run the Python cells from top to bottom to generate a burst, look for it in the counts, and estimate its incoming direction.
:::

[Open the interactive notebook](notebook/Crystal-Eye-ACME-Python.ipynb) and choose **Enable Run buttons**. Once the kernel is ready, use **Run Detection** on the graph cell to prepare the inputs and plot the counts in one step. To explore the full workflow, run the cells in order.

[Open in JupyterLab on Binder](https://mybinder.org/v2/gh/francesco-basciani/crystal-eye-acme-tutorial/03dc63ffdc902c6d959490553bf7f2cc8e98819a?urlpath=lab/tree/book/notebook/Crystal-Eye-ACME-Python.ipynb)

Binder opens the notebook in JupyterLab with PyROOT and the workshop inputs ready. Wait for JupyterLab to load, then click **▶ Run** or press **Shift + Enter** to execute each cell. The plots appear below the cells as they run.

If Binder reports a launch error, [start a fresh session on the alternate server](https://2i2c.mybinder.org/v2/gh/francesco-basciani/crystal-eye-acme-tutorial/03dc63ffdc902c6d959490553bf7f2cc8e98819a?urlpath=lab/tree/book/notebook/Crystal-Eye-ACME-Python.ipynb).

1. Run the setup cell once. In **Generate a burst**, run the default parameters, then try a zenith angle of **45°** or reduce the amplitude by a factor of ten.
2. In **Detection**, look for the burst in the noisy counts. Set **reveal_injected = True** and rerun the plot to compare your interpretation with the injected signal.
3. In **Localization**, compare the reconstructed detector-frame angles with the injected direction. The plot shows the retained templates and the reconstructed direction.

## Run locally

To work in your own Jupyter environment, download the {download}`notebook <notebook/Crystal-Eye-ACME-Python.ipynb>`. The Python implementations are included in its cells. The [repository setup guide](https://github.com/francesco-basciani/crystal-eye-acme-tutorial#run-the-notebook) links to the workshop inputs.
