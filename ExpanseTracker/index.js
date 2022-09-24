// first get data

let form = document.getElementById("form");

//on dom loaded
window.addEventListener("DOMContentLoaded", showOnScreen);

// console.dir(form);
form.addEventListener("submit", addExpense);

function addExpense() {
  let amount = document.getElementById("expanse");
  let desc = document.getElementById("desc");
  let type = document.getElementById("ExpanaseType");

  //new expense obj
  let expenseObj = {
    amount: amount.value,
    desc: desc.value,
    type: type.value,
  };

  //get local storage
  // if AllExpenses =0 ; then set empty array
  let storeArr = JSON.parse(localStorage.getItem("AllExpenses")) || [];

  // console.log(storeArr);

  //add new expense
  storeArr.push(expenseObj);

  //saving on local storage
  localStorage.setItem("AllExpenses", JSON.stringify(storeArr));

  //show on screen
  showOnScreen();

  //clear values
  amount.value = "";
  desc.value = "";
  type.value = "other";
}

function showOnScreen() {
  let list = document.getElementById("listExpense");
  list.innerHTML = "";
  // all expenses array
  let AllExpenses = JSON.parse(localStorage.getItem("AllExpenses")) || [];

  // display on dom
  AllExpenses.forEach((expanse, idx) => {
    let newHtml = `<li class="listItem" id="${idx}">Expense Type = ${expanse.type}   Amount =  ${expanse.amount}   Description = ${expanse.desc} <button onclick='delExp("${idx}")'>Delete</button><button onclick="editExp('${idx}')">Edit</button></li>`;

    //create new li
    list.innerHTML = list.innerHTML + newHtml;
  });
}

function delExp(idx) {
  console.log(idx);

  // all expenses array
  let AllExpenses = JSON.parse(localStorage.getItem("AllExpenses"));

  let newArr = AllExpenses.filter((curr, index) => {
    if (index != idx) return curr;
  });

  //saving on local storage
  localStorage.setItem("AllExpenses", JSON.stringify(newArr));
  showOnScreen();
}

function editExp(id) {
  // all expenses array
  let AllExpenses = JSON.parse(localStorage.getItem("AllExpenses"));

  let expense = AllExpenses[id]; // id --> index

  //now delete expense
  delExp(id);

  showOnScreen();

  //set value of form
  let amount = document.getElementById("expanse");
  let desc = document.getElementById("desc");
  let type = document.getElementById("ExpanaseType");

  amount.value = expense.amount;
  desc.value = expense.desc;
  type.value = expense.type;
}
