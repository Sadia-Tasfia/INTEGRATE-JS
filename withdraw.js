// document.getElementById("btn-withdraw").addEventListener("click", function () {
//   // step-1
//   const withdrawField = document.getElementById("withdraw-field");
//   const withdrawFieldString = withdrawField.value;
//   const withdrawFieldAmount = parseFloat(withdrawFieldString);

//   // step-2
//   const withdrawElement = document.getElementById("withdraw-total");
//   const previousWithdrawString = withdrawElement.innerText;
//   const previousWithdrawTotal = parseFloat(previousWithdrawString);

//   // step-3
//   const newWithdrawAmount = previousWithdrawTotal + withdrawFieldAmount;
//   withdrawElement.innerText = newWithdrawAmount;

//   // step-4
//   const balanceElement = document.getElementById("balance-total");
//   const previousBalanceString = balanceElement.innerText;
//   const previousBalanceTotal = parseFloat(previousBalanceString);

//   // step-5
//   const newBalance = previousBalanceTotal - withdrawFieldAmount;
//   balanceElement.innerText = newBalance;

//   // step:6 - clear the input
//   withdrawField.value = "";
// });


// SHORTCUT 
document.getElementById("btn-withdraw").addEventListener('click', function(){
  const withdrawField = getInputValue("withdraw-field");
  const previousWithdrawTotal = getElement("withdraw-total");
  const newWithdrawAmount = previousWithdrawTotal + withdrawField;
  setElement("withdraw-total", newWithdrawAmount);

  const balanceElement = getElement("balance-total");
  const newBalance = balanceElement - withdrawField;
  setElement("balance-total",newBalance);
})