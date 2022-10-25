const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", showNotification);

function showNotification() {
  // create new notification
  let notification = document.createElement("div");
  notification.innerText = " annoying Notification ";
  //add class to notification
  notification.classList.add("toast");
  // append to container
  container.appendChild(notification);

  // set timer to remove
  setTimeout(() => {
    notification.remove();
  }, 2000);
}
