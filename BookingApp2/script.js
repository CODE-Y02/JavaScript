// let API = "5266710aa43c47a185324357b7258ab5";
let API = "ae5907560a734e389aed11f7d2093408";

let appointments = []; // appointments Array

window.addEventListener("DOMContentLoaded", (e) => {
  getAllAppointments(e);
});

function getAllAppointments(e) {
  e.preventDefault();
  document.getElementById("userList").innerHTML = "";
  axios
    .get(`https://crudcrud.com/api/${API}/appointment`)
    .then((response) => {
      console.log("DCL", response);
      appointments = response.data;
      //now show on screen ;
      appointments.map((booking) => {
        // console.log(booking);
        showEachBookingOnScreen(booking);
      });
    })
    .catch((error) => console.log(error));
}

function saveToServer(event) {
  event.preventDefault();
  // console.log("submitted");
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  let obj = {
    name: name,
    email: email,
  };

  let id = document.getElementById("hidden").value || undefined;

  if (id) {
    //edit post    PUT REQUEST
    axios
      .put(`https://crudcrud.com/api/${API}/appointment/${id}`, obj)
      .then((response) => {
        console.log("postUpdated", response);
        showEachBookingOnScreen({ ...obj, _id: id });
        // getAllAppointments()
      })
      .catch((error) => console.log(error));
  } else {
    axios
      .post(`https://crudcrud.com/api/${API}/appointment/`, obj)
      .then((response) => {
        console.log("added", response);
        showEachBookingOnScreen(response.data);
      })
      .catch((error) => console.log(error));
  }
}

function showEachBookingOnScreen(user) {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

  let oldlist = document.getElementById("userList");

  let newEle = `<li  id="${user._id}">
                  Name: ${user.name}   Email: ${user.email}

                  <button id="del" onclick="deleteBooking(event,'${user._id}')">Delete</button>
                  <button id="edit" onclick="editBooking(event,'${user._id}')">Edit</button>
              </li>`;

  oldlist.innerHTML = oldlist.innerHTML + newEle;
}

function removeFromScreen(uid) {
  document.getElementById(uid).remove();
}

function deleteBooking(e, uid) {
  e.preventDefault();
  // uid == _id
  axios
    .delete(`https://crudcrud.com/api/${API}/appointment/${uid}`)
    .then(() => {
      removeFromScreen(uid);
    })
    .catch((error) => console.log(error));
}

function editBooking(e, uid) {
  e.preventDefault();

  let hidden = document.getElementById("hidden");
  hidden.value = "";
  axios
    .get(`https://crudcrud.com/api/${API}/appointment/${uid}`)
    .then((response) => {
      document.getElementById("name").value = response.data.name;
      document.getElementById("email").value = response.data.email;
      hidden.value = uid;
      removeFromScreen(uid);
    })
    .catch((error) => console.log("error in edit", error));
}
