// document.getElementById("btn-deposit").addEventListener('click',function(){
//   // step-1 
//   const depositField = document.getElementById("deposit-field");
//   const depositFieldString = depositField.value;
//   const depositFieldAmount = parseFloat(depositFieldString);

//   // step-2
//   const depositElement = document.getElementById("deposit-total");
//   const previousDepositString= depositElement.innerText;
//   const previousDepositTotal = parseFloat(previousDepositString);

//   // step-3
//   const newDepositAmount = previousDepositTotal + depositFieldAmount;
//   depositElement.innerText = newDepositAmount;

//   // step-4
//   const balanceElement = document.getElementById("balance-total");
//   const previousBalanceString = balanceElement.innerText;
//   const previousBalanceTotal = parseFloat(previousBalanceString);

//   // step-5 
//   const newBalance = previousBalanceTotal + depositFieldAmount;
//   balanceElement.innerText = newBalance;

//   // step:6 - clear the input
//   depositField.value= "";
// });



// SHORT CUT
document.getElementById("btn-deposit").addEventListener('click', function(){
  const depositFieldAmount = getInputValue("deposit-field");
  const previousDepositTotal = getElement("deposit-total");

  const newDepositAmount= previousDepositTotal + depositFieldAmount;
  setElement("deposit-total",newDepositAmount);

  const balanceElement = getElement("balance-total");
  const newBalance = balanceElement + depositFieldAmount ;
  setElement("balance-total", newBalance);
});