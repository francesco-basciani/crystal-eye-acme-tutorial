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
      if (phase === "ready") {
        status.textContent = "Kernel ready. Run the Python cells from top to bottom.";
        observer.disconnect();
      } else if (phase === "failed" || phase === "error") {
        status.textContent = "Binder could not start the kernel. Try JupyterLab on Binder.";
        observer.disconnect();
      }
    });
    observer.observe(start, { childList: true, subtree: true });
    initThebe();
  }, { once: true });
});
