// first get data

let form = document.getElementById("form");

//on dom loaded
window.addEventListener("DOMContentLoaded", showOnScreen);

// console.dir(form);
form.addEventListener("submit", addExpense);

function addExpense(event) {
  event.preventDefault();
  let amount = document.getElementById("expanse");
  let desc = document.getElementById("desc");
  let type = document.getElementById("ExpanaseType");

  //new expense obj
  let expenseObj = {
    amount: amount.value,
    desc: desc.value,
    type: type.value,
  };

  //lets create key
  let key = `${Date.now()}`;
  console.log(key)

  //saving on local storage
  localStorage.setItem(key, JSON.stringify(expenseObj));

  //show on screen
  showOnScreen();

  //clear values
  amount.value = "";
  desc.value = "";
  type.value = "other";
}

function showOnScreen() {
  //   console.log(localKeysArr)

  let list = document.getElementById("listExpense");
  list.innerHTML = "";

  let keysArr = Object.keys(localStorage);

  keysArr.map((key) => {
    // console.log(key);
    let eachObj = JSON.parse(localStorage.getItem(key));
    // console.log(eachObj);
    let newHtml = `<li class="listItem" id="${key}">Expense Type = ${eachObj.type}   Amount =  ${eachObj.amount}   Description = ${eachObj.desc} <button onclick='delExp("${key}")'>Delete</button><button onclick="editExp('${key}')">Edit</button></li>`;

    //create new li
    list.innerHTML = list.innerHTML + newHtml;
  });
}

function delExp(id) {
//   console.log("id=", id);
  //this id is key
  localStorage.removeItem(id);
  showOnScreen();
}

function editExp(id) {
  let expense = JSON.parse(localStorage.getItem(id));
  delExp(id);
  let amount = document.getElementById("expanse");
  let desc = document.getElementById("desc");
  let type = document.getElementById("ExpanaseType");

  amount.value = expense.amount;
  desc.value = expense.desc;
  type.value = expense.type;
}
