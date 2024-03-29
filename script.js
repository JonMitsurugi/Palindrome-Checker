const textInputElem = document.getElementById("text-input");
const checkButtonElem = document.getElementById("check-btn");
const resultElem = document.getElementById("result");

let inputVal = textInputElem.value;

//Check and alert if the input is empty
const alertIfInputIsEmpty = () => {
  if (isInputEmpty()) {
    alert("Please input a value");
  }
};
const isInputEmpty = () => textInputElem.value === "";

const cleanInputVal = () => {
  //? Al tipo de regex unicode hay que agregarle el flag 'u' para que lo reconozca. {P} son todos signos de puntuación, pero deja excluidos varios simbolos como backticks, suma, etc. Por eso es mejor expresión {L} (letter) en modo opuesto (^) porque reconoce letras acentuadas de otros idiomas, a diferencia de la expression \w que solo va de la a a la z, y no reconoce la ñ como letra.
  const symbols = /[^\p{L}]/gu;
  inputVal = textInputElem.value;

  const upperCaseInputVal = upperCase(inputVal);
  const clearInputVal = upperCaseInputVal.replace(symbols, "");

  return clearInputVal;
};
function upperCase(text) {
  return text.toUpperCase();
}

function check() {
  alertIfInputIsEmpty();

  if (!isInputEmpty()) {
    const clearInputVal = cleanInputVal();
    const clearInputValArray = clearInputVal.split("");
    const isAPalindrome = checkIfItIsPalindrome(clearInputValArray);

    ShowResult(isAPalindrome);
  }
}

const checkIfItIsPalindrome = (array) => array.every((v, i) => v == array.toReversed()[i]);
  
function ShowResult(result) {
  if (result) {
    resultElem.innerText = `${inputVal} is a palindrome`;
  } else {
    resultElem.innerText = `${inputVal} is not a palindrome`;
  }
}

checkButtonElem.addEventListener("click", check);
//? Para recordar: el segundo parametro del eventlistener debe ser una funcion a la que se le pasa una funcion
