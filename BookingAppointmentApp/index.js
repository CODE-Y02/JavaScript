// import axios from URL("https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js");

window.addEventListener("DOMContentLoaded", showUserOnScreen());

let form = document.getElementsByClassName("form")[0];
// console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");

  let user = {
    name: name.value,
    email: email.value,
    phone: phone.value,
  };

  //   if (localStorage.getItem(user.email)) {
  //     // if email alreay exist
  //     if (confirm("Email already exist !! Overwrite it ? ")) {
  //       removeUser(user.email);
  //     } else {
  //       return;
  //     }
  //   }

  //if edit
  const id = document.getElementById("editedItem").value;
  if (id) {
    // update post
    axios
      .put(
        `https://crudcrud.com/api/8b4cfad5ac164e7d9eca43eb1b9d0188/appointments/${id}`,
        user
      )
      .then(showUserOnScreen)
      .catch((err) => showErr(err));

    //return
  } else {
    //send post
    axios
      .post(
        "https://crudcrud.com/api/8b4cfad5ac164e7d9eca43eb1b9d0188/appointments",
        user
      )
      .then(showUserOnScreen)
      .catch((err) => showErr(err));
  }

  //   showUserOnScreen();

  name.value = "";
  email.value = "";
  phone.value = "";
});

function showErr(errMsg) {
  const errBox = document.getElementById("errMsg");
  errBox.innerHTML = `<h2>Error :${errMsg} </h2>`;
  errBox.classList.remove("hide");

  setTimeout(() => {
    errBox.classList.add("hide");
    errBox.innerHTML = "";
  }, 3000);
}

async function showUserOnScreen() {
  let appointments = [];
  let err = false;
  await axios
    .get(
      "https://crudcrud.com/api/8b4cfad5ac164e7d9eca43eb1b9d0188/appointments"
    )
    .then((res) => {
      //   console.log(res);
      appointments = res.data;
      //   console.log(appointments);
    })
    .catch((error) => {
      console.log(error);
      err = error;
      showErr(err);
    });

  //if successfull
  if (!err) {
    const parentNode = document.getElementById("userList");
    // console.log(parentNode)
    parentNode.innerHTML = "";
    appointments.map((user) => {
      //   console.log(user);
      let newLi = `<li id='${user._id}'>
    <div class="textContent">
    Name: ${user.name}     Email: ${user.email}     Phone: ${user.phone}
    </div>
    <div class="controls">
      <button class="btn del" onclick="delUser('${user._id}')">Delete</button
      ><button class="btn edit" onclick="editUser('${user._id}')">Edit</button>
    </div>
  </li>`;

      parentNode.innerHTML = parentNode.innerHTML + newLi;
    });
  }
}

function delUser(id) {
  axios
    .delete(
      `https://crudcrud.com/api/8b4cfad5ac164e7d9eca43eb1b9d0188/appointments/${id}`
    )
    .then(showUserOnScreen)
    .catch((err) => showErr(err));
}

function editUser(id) {
  //setp 1 get user obj
  axios
    .get(
      `https://crudcrud.com/api/8b4cfad5ac164e7d9eca43eb1b9d0188/appointments/${id}`
    )
    .then((user) => {
      let name = document.getElementById("name");
      let email = document.getElementById("email");
      let phone = document.getElementById("phone");
        // console.log(user.data)
      name.value = user.data.name;
      email.value = user.data.email;
      phone.value = user.data.phone;

      document.getElementById("editedItem").value = id;
      document.getElementById(id).remove();
    });
}


