document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("submitBtn");
  const status = document.getElementById("status");

  if (!btn) return;

  btn.addEventListener("click", () => {
    const data = {};

    document.querySelectorAll("textarea.persist").forEach((box) => {
      data[box.dataset.step] = box.value;
    });

    console.log("SUBMISSION DATA:", data);

    status.textContent = "Submitted ✔ (check console)";
  });
});