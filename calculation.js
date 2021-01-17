var balanceAmount = document.getElementById("balance-amount");
var incomeAmount = document.getElementById("income-amount");
var expenseAmount = document.getElementById("expense-amount");

var inputTitle = document.getElementById("input-title");
var inputAmount = document.getElementById("input-amount");
var plusSign = document.getElementById("plus-sign");
plusSign.addEventListener("click", inputValue);

var editButton = document.getElementById("edit");
var deleteButton = document.getElementById("delete");

let ENTRY_LIST =[];

// var plusSign = document.getElementById("plus-sign");

function inputValue(){
    let income ={
        type : "income",
        title : inputTitle.value,
        amount : inputAmount.value
    }

    ENTRY_LIST.push(income);
    updateUI();
}