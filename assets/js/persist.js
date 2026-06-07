document.addEventListener("DOMContentLoaded", () => {

  const boxes = document.querySelectorAll('input[type="checkbox"]');
  const bar = document.getElementById("progress-bar");
  const count = document.getElementById("count");

  function updateProgress() {
    const checked = [...boxes].filter(box => box.checked).length;
    const total = boxes.length;

    const percent = (checked / total) * 100;

    bar.style.width = `${percent}%`;
    count.textContent = `${checked}/${total}`;
  }

  boxes.forEach(box => {

    // restore saved state
    box.checked = localStorage.getItem(box.id) === "true";

    box.addEventListener("change", () => {
      localStorage.setItem(box.id, box.checked);
      updateProgress();
    });

  });

  updateProgress();
});