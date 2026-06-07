document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("textarea.persist").forEach((box) => {
    const key = box.dataset.key;

    box.value = localStorage.getItem(key) || "";

    box.addEventListener("input", () => {
      localStorage.setItem(key, box.value);
    });
  });
});