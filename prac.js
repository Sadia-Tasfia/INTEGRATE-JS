function getInputValue (inputId){
  const inputField = document.getElementById(inputId);
  const inputFieldString = inputField.value;
  const inputFieldAmount = parseFloat(inputFieldString);

  inputField.value = '';
  return inputFieldAmount;
}

function getElement (elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.innerText;
  const elementTotal =parseFloat(elementString);
  return elementTotal;
}

function setElement(elementId, newValue){
  const element =document.getElementById(elementId);
  element.innerText = newValue;
}