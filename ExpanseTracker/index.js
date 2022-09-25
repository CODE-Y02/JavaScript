// first get data

let form = document.getElementById("form");

//on dom loaded
window.addEventListener("DOMContentLoaded", showOnScreen());

// console.dir(form);
form.addEventListener("submit", (e) => addExpense(e));

function addExpense(e) {
  e.preventDefault();
  let amount = document.getElementById("expanse");
  let desc = document.getElementById("desc");
  let type = document.getElementById("ExpanaseType");

  let id = document.getElementById("expenseId").value;

  if (id) {
    let AllExpenses = JSON.parse(localStorage.getItem("AllExpenses"));
    // console.log("ALL ", AllExpenses);
    let filteredArr = AllExpenses.filter((expense) => expense.id != id);
    // console.log("after = ", filteredArr);
    // console.log(edit)

    //saving on local storage
    localStorage.setItem("AllExpenses", JSON.stringify(filteredArr));
  }

  //new expense obj
  let expenseObj = {
    id: Date.now(),
    amount: amount.value,
    desc: desc.value,
    type: type.value,
  };

  //get local storage
  // if AllExpenses =0 ; then set empty array
  let AllExpenses = JSON.parse(localStorage.getItem("AllExpenses")) || [];

  // console.log(storeArr);

  //add new expense
  AllExpenses.push(expenseObj);

  //saving on local storage
  localStorage.setItem("AllExpenses", JSON.stringify(AllExpenses));

  //show on screen
  showOnScreen(AllExpenses);

  //clear values
  amount.value = "";
  desc.value = "";
  type.value = "other";
}

function showOnScreen(expenseArr = null) {
  if (!expenseArr) {
    expenseArr = JSON.parse(localStorage.getItem("AllExpenses")) || [];
  }
  const list = document.getElementById("listExpense");
  list.innerHTML = "";
  // console.log(expenseArr);
  expenseArr.forEach((expense) => {
    let newHtml = `<li><div class="infoBox">Expense: ${expense.type}     Amount: ${
      expense.amount
    }    Description:${expense.desc} </div>
     <div class="controlBox">
    <button onclick="deleteEditExp('${
      expense.id
    }')">Delete</button><button onclick="deleteEditExp('${
      expense.id
    }',${true})">Edit</button>
          </div></li>`;

    list.innerHTML = list.innerHTML + newHtml;
  });
}

function deleteEditExp(id, edit = false) {
  let AllExpenses = JSON.parse(localStorage.getItem("AllExpenses"));
  // console.log("ALL ", AllExpenses);
  let filteredArr = AllExpenses.filter((expense) => expense.id != id);
  // console.log("after = ", filteredArr);
  // console.log(edit);

  if (edit) {
    //find expense
    let expenseArr = AllExpenses.filter((expense) => expense.id == id);

    document.getElementById("expanse").value = expenseArr[0].amount;
    document.getElementById("desc").value = expenseArr[0].desc;
    document.getElementById("ExpanaseType").value = expenseArr[0].type;

    document.getElementById("expenseId").value = id;

    showOnScreen(filteredArr);
    return;
  }

  //saving on local storage
  localStorage.setItem("AllExpenses", JSON.stringify(filteredArr));
  showOnScreen(filteredArr);
}
