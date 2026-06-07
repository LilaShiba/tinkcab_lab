document.addEventListener("DOMContentLoaded", () => {

  // ===== Persistent text boxes =====
  document.querySelectorAll("textarea.persist").forEach((box) => {
    const key = box.dataset.step;

    // Load saved value
    box.value = localStorage.getItem(key) || "";

    // Save + visual feedback
    box.addEventListener("input", () => {
      localStorage.setItem(key, box.value);

      box.classList.add("saved");

      clearTimeout(box._saveTimeout);
      box._saveTimeout = setTimeout(() => {
        box.classList.remove("saved");
      }, 400);
    });
  });


  // ===== Progress checkboxes =====
  const boxes = document.querySelectorAll('input[type="checkbox"]');
  const progress = document.getElementById("progress");
  const count = document.getElementById("count");


  function updateProgress() {
    const checked = [...boxes].filter(box => box.checked).length;

    if (progress) {
      progress.max = boxes.length;
      progress.value = checked;
    }

    if (count) {
      count.textContent = `${checked}/${boxes.length}`;
    }
  }


  boxes.forEach((box) => {

    // Restore saved state
    box.checked = localStorage.getItem(box.id) === "true";

    // Save state
    box.addEventListener("change", () => {
      localStorage.setItem(box.id, box.checked);
      updateProgress();
    });

  });


  updateProgress();

});