const textInputElem = document.getElementById("text-input");
const checkButtonElem = document.getElementById("check-btn");
const resultElem = document.getElementById("result");

let inputVal = textInputElem.value;
let isInputEmpty = textInputElem.value === "";;

//Check and alert if the input is empty
const alertIfInputIsEmpty = () => {
  if (isInputEmpty) {
    alert("Please input a value");
  }
};

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

  if (!isInputEmpty) {
    clearInputVal = cleanInputVal();
    clearInputValArray = clearInputVal.split("");
    const isAPalindrome = checkIfItIsPalindrome(clearInputValArray);

    ShowResult(isAPalindrome);
  }
}

function checkIfItIsPalindrome(array) {
  const checkLength = Math.ceil(array.length / 2);

  for (let i = 0; i < checkLength; i++) {
    const element = array[i];

    if (element !== array[array.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function ShowResult(result) {
  if (result) {
    resultElem.innerText = `${inputVal} is a palindrome`;
  } else {
    resultElem.innerText = `${inputVal} is not a palindrome`;
  }
}

checkButtonElem.addEventListener("click", check);
//? Para recordar: el segundo parametro del eventlistener debe ser una funcion a la que se le pasa una funcion
