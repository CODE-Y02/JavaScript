const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
// console.log(nav);
btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});
