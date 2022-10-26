const darkToggle = document.getElementById("toggle");

darkToggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
});
