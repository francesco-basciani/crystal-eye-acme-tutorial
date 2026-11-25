function enableStandaloneRun(section, burstCells, exercise, resultName) {
  const cells = Array.from(section.querySelectorAll(".thebelab-cell"));
  const target = cells.pop();
  if (!target || !cells.length || !burstCells.length) return;

  const editorFor = (cell) => cell.querySelector(".CodeMirror")?.CodeMirror;
  const editor = editorFor(target);
  const runner = Array.from(window.thebelab.cells).find(({ cell }) => cell[0] === target);
  const button = target.querySelector(".thebelab-run-button");
  const inputs = [...burstCells, ...cells].map(editorFor);
  if (!editor || !runner || !button || inputs.some((input) => !input)) return;

  function runExercise() {
    const sources = inputs.map((input) => input.getValue());
    const prepare = sources.map((source, i) =>
      `exec(compile(${JSON.stringify(source)}, "<ACME cell ${i + 1}>", "exec"), globals())`,
    );
    // Keep setup messages and the burst pixel plot out of the exercise output.
    const code = [
      "from IPython.utils.capture import capture_output",
      "with capture_output() as exercise_preparation:",
      ...prepare.map((line) => `    ${line}`),
      `if globals().get("${resultName}") is None:`,
      '    print(exercise_preparation.stdout, end="")',
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

  button.textContent = `Run ${exercise}`;
  button.title = `Prepare the inputs and plot ${exercise}`;
  button.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    runExercise();
  }, true);
  editor.addKeyMap({ "Shift-Enter": runExercise });
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
        const detection = notebook.querySelector("#detection-when-did-the-counts-rise");
        const localization = notebook.querySelector("#localization-where-did-the-burst-come-from");
        const burstCells = [];
        for (const cell of notebook.querySelectorAll(".thebelab-cell")) {
          if (detection.contains(cell)) break;
          burstCells.push(cell);
        }
        enableStandaloneRun(detection, burstCells, "Detection", "curve_response");
        enableStandaloneRun(localization, burstCells, "Localization", "response");
        status.textContent = "Kernel ready. Run Detection and Localization independently, or work through the cells in order.";
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
