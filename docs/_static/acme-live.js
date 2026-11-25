function enableDetectionRun(notebook) {
  const section = notebook.querySelector("#detection-when-did-the-counts-rise");
  const cells = Array.from(notebook.querySelectorAll(".thebelab-cell"));
  const detection = section?.querySelectorAll(".thebelab-cell");
  const target = detection?.[detection.length - 1];
  if (!target) return;

  const index = cells.indexOf(target);
  const editorFor = (cell) => cell.querySelector(".CodeMirror")?.CodeMirror;
  const editor = editorFor(target);
  const runner = Array.from(window.thebelab.cells).find(({ cell }) => cell[0] === target);
  const button = target.querySelector(".thebelab-run-button");
  if (index < 1 || !editor || !runner || !button) return;

  function runDetection() {
    const sources = cells.slice(0, index).map((cell) => editorFor(cell).getValue());
    const prepare = sources.map((source, i) =>
      `exec(compile(${JSON.stringify(source)}, "<ACME cell ${i + 1}>", "exec"), globals())`,
    );
    // Prepare the inputs without showing the burst pixel plot in the Detection output.
    const code = [
      "from IPython.utils.capture import capture_output",
      "with capture_output() as detection_preparation:",
      ...prepare.map((line) => `    ${line}`),
      'if globals().get("curve_response") is None:',
      '    print(detection_preparation.stdout, end="")',
      editor.getValue(),
    ].join("\n");

    // Thebe snapshots the current document before sending it to the kernel.
    const original = editor.swapDoc(new window.CodeMirror.Doc(code, "python"));
    try {
      runner.execute();
    } finally {
      editor.swapDoc(original);
    }
  }

  button.textContent = "Run Detection";
  button.title = "Prepare the inputs and plot Detection";
  button.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    runDetection();
  }, true);
  editor.addKeyMap({ "Shift-Enter": runDetection });
}

window.addEventListener("load", () => {
  const notebook = document.querySelector("#crystal-eye-acme-hands-on-in-python");
  if (!notebook || !notebook.querySelector(".cell_input")) return;

  const controls = document.createElement("p");
  controls.className = "ce-live-controls";
  const start = document.createElement("button");
  start.type = "button";
  start.className = "thebelab-button thebe-launch-button";
  start.textContent = "Enable Run buttons";
  const status = document.createElement("span");
  status.className = "ce-live-status";
  status.setAttribute("role", "status");
  status.textContent = "Connect to a Python kernel to edit and run the cells on this page.";
  const fallback = document.createElement("a");
  fallback.textContent = "JupyterLab launch options";
  fallback.href = new URL("../hands-on.html", window.location.href).href;
  fallback.hidden = true;
  controls.append(start, status, fallback);
  notebook.querySelector("h1").after(controls);

  start.addEventListener("click", () => {
    // Use a federation member that has been tested with the workshop image.
    const config = document.querySelector('script[type="text/x-thebe-config"]');
    if (!config || typeof initThebe !== "function") {
      start.disabled = true;
      status.textContent = "The page could not initialize a kernel. Open the notebook in JupyterLab.";
      fallback.hidden = false;
      return;
    }
    config.textContent = config.textContent.replace(
      "binderOptions: {",
      'binderOptions: { binderUrl: "https://2i2c.mybinder.org",',
    );
    start.disabled = true;
    status.textContent = "Starting the Binder session. Wait for the kernel before running cells.";
    fallback.hidden = false;
    const observer = new MutationObserver(() => {
      const phase = start.querySelector(".status")?.textContent.trim();
      for (const run of notebook.querySelectorAll(".thebelab-run-button")) {
        run.disabled = phase !== "ready";
      }
      if (phase === "ready") {
        enableDetectionRun(notebook);
        status.textContent = "Kernel ready. Run Detection on its own or work through the cells in order.";
        observer.disconnect();
      } else if (phase === "failed" || phase === "error") {
        status.textContent = "Binder could not start the kernel. Try JupyterLab on Binder.";
        observer.disconnect();
      }
    });
    observer.observe(notebook, { childList: true, subtree: true });
    initThebe();
  }, { once: true });
});
