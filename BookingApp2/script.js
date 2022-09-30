let API = "5266710aa43c47a185324357b7258ab5";

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
    UID: `${Date.now()}`,
    name: name,
    email: email,
  };

  let edit = false;
  let Uid;
  appointments.forEach((user) => {
    if (user.email == email) {
      Uid = user._id;
      edit = confirm(
        "You have already booked Appointment !!  want to modify??"
      );
    }
  });

  if (edit) {
    //edit post    PUT REQUEST
    axios
      .put(`https://crudcrud.com/api/${API}/appointment/${Uid}`, obj)
      .then((response) => {
        // console.log("postUpdated",response)
        getAllAppointments();
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

  let newEle = `<li  id="${user.UID}">
                  Name: ${user.name}   Email: ${user.email}

                  <button id="del" onclick="deleteBooking(event,'${user.UID}')">Delete</button>
                  <button id="edit" onclick="editBooking(event,'${user.UID}')">Edit</button>
              </li>`;

  oldlist.innerHTML = oldlist.innerHTML + newEle;
}

function removeFromScreen(uid) {
  // this id is id of li tag
  document.getElementById(uid).remove();
}

function deleteBooking(e, uid) {
  e.preventDefault();
  // this id is id of li tag

  //find _id of server
  let arrTemp = appointments.filter((obj) => obj.UID == uid);
  console.log(arrTemp[0]);
  let deletedId = arrTemp[0]._id;

  axios
    .delete(`https://crudcrud.com/api/${API}/appointment/${deletedId}`)
    .then(() => {
      removeFromScreen(uid);
    })
    .catch((error) => console.log(error));
}

function editBooking(e, uid) {
  e.preventDefault();

  // this id is id of li tag

  let obj = appointments.filter((obj) => obj.UID == uid);
  console.log(obj);
  document.getElementById("name").value = obj.name;
  document.getElementById("email").value = obj.value;

  removeFromScreen(uid);
}
