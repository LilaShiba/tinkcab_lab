document.addEventListener("DOMContentLoaded", () => {
  const progress = document.getElementById("progress");
  const count = document.getElementById("count");
  // Target checkboxes cleanly inside the block
  const boxes = document.querySelectorAll('.success-criteria-box input[type="checkbox"]');

  // Guard clause: Exit silently if these elements aren't present on the page
  if (!progress || !count || boxes.length === 0) return;

  function updateProgress() {
    const checked = Array.from(boxes).filter(box => box.checked).length;

    // Fix: Explicitly enforce valid numbers so the browser never drops into an indeterminate animation loop
    progress.max = boxes.length;
    progress.value = checked; 
    
    count.textContent = `${checked}/${boxes.length}`;
  }

  boxes.forEach(box => {
    // Namespace the storage key so checkboxes don't bleed across different project pages
    const storageKey = `${window.location.pathname}_${box.id}`;
    
    // Restore states safely
    box.checked = localStorage.getItem(storageKey) === "true";

    box.addEventListener("change", () => {
      localStorage.setItem(storageKey, box.checked);
      updateProgress();
    });
  });

  // Calculate immediately on load to set explicit absolute values
  updateProgress();
});