const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

const popupContainer = document.getElementById("popup-wrap");

openBtn.addEventListener("click", showPopup);
closeBtn.addEventListener("click", closePopup);

function showPopup() {
  popupContainer.classList.remove("hidden");
}
function closePopup() {
  popupContainer.classList.add("hidden");
}
