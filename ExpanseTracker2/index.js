// api -->https://crudcrud.com/api/b5cd782016874bb280a85b2ad8e26d82
const API_KEY = "a4c90edd534e4808ab0a688dacb83737";

// All expenses
let allExpenses = [];

// first get data from form
let form = document.getElementById("form");

//on dom loaded
window.addEventListener("DOMContentLoaded", getAll);

//On submit
form.addEventListener("submit", (e) => sendData(e));

//getAll
function getAll(event) {
  event.preventDefault();
  axios
    .get(`https://crudcrud.com/api/${API_KEY}/expenses`)
    .then((Response) => {
      console.log(Response.data);
      allExpenses = Response.data;

      //display all
      allExpenses.map((expense) => {
        showOnscreen(expense);
      });
    })
    .catch((error) => console.log(error));
}

// sendData --> post and put
function sendData(e) {
  e.preventDefault();
  console.log("send data");
  let amount = document.getElementById("amount");
  let desc = document.getElementById("desc");
  let type = document.getElementById("ExpanaseType");

  let expenseObj = {
    amount: amount.value,
    desc: desc.value,
    type: type.value,
  };

  let id = document.getElementById("expenseId").value;
  if (id) {
    console.log(id);
    //edit // put request
    axios
      .put(`https://crudcrud.com/api/${API_KEY}/expenses/${id}`, expenseObj)
      .then((response) => {
        console.log(response);
        allExpenses = allExpenses.filter((obj) => obj._id != id);
        allExpenses.push({ ...expenseObj, _id: id });
        showOnscreen({ ...expenseObj, _id: id });
        document.getElementById("expenseId").value = "";
      })
      .catch((error) => console.log(error));
  } else {
    //post
    axios
      .post(`https://crudcrud.com/api/${API_KEY}/expenses`, expenseObj)
      .then((response) => {
        console.log(response);
        allExpenses.push(response.data);
        showOnscreen(response.data);
      })
      .catch((error) => console.log(error));
  }

  amount.value = "";
  desc.value = "";
  type.value = "other";
}

//show on screen
function showOnscreen(obj) {
  let ul = document.getElementById("listExpense");
  let newLi = `<li id="${obj._id}">  
  Expense Type : ${obj.type}   Amount : ${obj.amount}   Description : ${obj.desc} <button onclick="editExp('${obj._id}')">Edit</button><button onclick="delExp('${obj._id}')">Delete</button>
  </li>
  `;

  ul.innerHTML = ul.innerHTML + newLi;
}

//remove from screen
function removeFromScreen(id) {
  document.getElementById(id).remove();
}

function delExp(id) {
  //delete
  axios
    .delete(`https://crudcrud.com/api/${API_KEY}/expenses/${id}`)
    .then((response) => {
      //remove from screen
      removeFromScreen(id);
      //removefrom all expenses
      allExpenses = allExpenses.filter((obj) => obj._id != id);
    })
    .catch((error) => console.log(error));
}

function editExp(id) {
  // expense id
  document.getElementById("expenseId").value = id;
  let amount = document.getElementById("amount");
  let desc = document.getElementById("desc");
  let type = document.getElementById("ExpanaseType");
  //find obj
  let editObj = allExpenses.filter((obj) => obj._id == id)[0];
  amount.value = editObj.amount;
  desc.value = editObj.desc;
  type.value = editObj.type;

  //remove from screen
  removeFromScreen(id);
}
