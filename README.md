# Crystal Eye · ACME Hands-on

[Open the tutorial on GitHub Pages](https://francesco-basciani.github.io/crystal-eye-acme-tutorial/).

The Jupyter Book presents the detector, background and response simulations using figures from Ritabrata's tutorial outline. The Python exercise walks through burst generation, detection and localization. The notebook and its companion module live in `book/notebook/`.

## Run the notebook

[Launch on Binder](https://mybinder.org/v2/gh/francesco-basciani/crystal-eye-acme-tutorial/81d60271be8130dd3da0866933c0239b1625e72b?urlpath=lab/tree/book/notebook/Crystal-Eye-ACME-Python.ipynb) to open a JupyterLab session with the Python environment and data. Results appear after running the cells.

Use a Jupyter kernel with CERN ROOT (PyROOT), NumPy and Matplotlib. The exercise was previously checked locally with Python 3.14 and PyROOT 6.40.04. Keep the Python module beside the notebook and place the five tutorial input files in `ACMETutorial/` at the repository root, or set `ACME_TUTORIAL_DIR` to the input directory.

Download `allBackground.root`, `allEffArea.root`, `templates5deg.root`, `temEdepPix2degNew.root` and `upCal.txt` from the [workshop inputs release](https://github.com/francesco-basciani/crystal-eye-acme-tutorial/releases/tag/workshop-data-v1). The Pages edition provides the instructions and source files. Running the cells requires a Python session with those inputs.

## Build and preview the book

```sh
python -m pip install -r requirements-book.txt
jupyter-book build book -W
python -m http.server 8892 --bind 127.0.0.1 --directory book/_build/html
```

GitHub Pages serves `main:/docs`. To update it, synchronize the generated HTML after a successful build and commit the source and site together.

```sh
rsync -a --delete book/_build/html/ docs/
touch docs/.nojekyll
```

Notebook execution is disabled during the book build. The source notebook starts with empty output cells.
