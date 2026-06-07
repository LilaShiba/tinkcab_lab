document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("textarea.persist").forEach((box) => {
    const key = box.dataset.step;

    // Load saved value
    box.value = localStorage.getItem(key) || "";

    // Save + visual feedback
    box.addEventListener("input", () => {
      localStorage.setItem(key, box.value);

      // subtle "saved" feedback
      box.classList.add("saved");

      clearTimeout(box._saveTimeout);
      box._saveTimeout = setTimeout(() => {
        box.classList.remove("saved");
      }, 400);
    });
  });
});