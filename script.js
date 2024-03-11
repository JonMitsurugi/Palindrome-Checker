const textInputElem = document.getElementById("text-input");
let inputVal = textInputElem.value;

const checkButtonElem = document.getElementById("check-btn");
const resultElem = document.getElementById("result");
//Check and alert if the input is empty
const isInputEmpty = () => textInputElem.value === "";

const alertIfInputIsEmpty = () => {
  if (isInputEmpty()) {
    alert("Please input a value");
  }
};

//
const cleanInputText = () => {
  // const symbols = /[^\w\s]/g;
  // const symbols = /[\p{P}]/ug;
  //? Al tipo de regex unicode hay que agregarle el flag 'u' para que lo reconozca. {P} son todos signos de puntuación, pero deja excluidos varios simbolos como backticks, suma, etc. Por eso es mejor expresión {L} (letter) en modo opuesto (^) porque reconoce letras acentuadas de otros idiomas, a diferencia de la expression \w que solo va de la a a la z, y no reconoce la ñ como letra.
  const symbols = /[^\p{L}]/gu;
  inputVal = textInputElem.value;

  const upperCaseInputVal = upperCase(inputVal);
  const clearInputVal = upperCaseInputVal.replace(symbols, "");

  console.log(`1.Input original: ${inputVal}`);
  console.log(`2.simbolos encontrados: ${upperCaseInputVal.match(symbols)}`);
  console.log(`3.Input limpio: ${clearInputVal}`);
  return clearInputVal;
};

const putInConsole = () => {
  alertIfInputIsEmpty();
  clearInputVal = cleanInputText(inputVal);
  console.log(clearInputVal);
  // console.log(isInputEmpty());
  textInputElem.value = clearInputVal;
};

// textInputElem.addEventListener("change",  putInConsole);
checkButtonElem.addEventListener("click", check);
// textInputElem.addEventListener("propertychange", cleanInputText);
// textInputElem.addEventListener("change", cleanInputText);
//? Para recordar: el segundo parametro del eventlistener debe ser una funcion a la que se le pasa una funcion
// checkButtonElem.addEventListener("click", () => cleanInputText(value));
function upperCase(text) {
  return text.toUpperCase();
}

function check() {
  alertIfInputIsEmpty();

  clearInputVal = cleanInputText();

  clearInputValArray = clearInputVal.split("");
  console.log("array: " + clearInputValArray);
  // pepe(clearInputVal)
  // console.log(Math.ceil(clearInputVal));

  const isAPalindrome = checkIfItIsPalindrome(clearInputValArray);

  ShowResult(isAPalindrome)
}

function checkIfItIsPalindrome(array) {
  const checkLength = Math.ceil(array.length / 2);

  for (let i = 0; i < checkLength; i++) {
    const element = array[i];

    if (element !== array[array.length - i - 1]) {
      // console.log( checkLength);
      // console.log('primer letra: ' + element + '  index: ' + i);
      // console.log('segunda letra: ' + array[array.length - i - 1] + '  index: ' + (array.length - i - 1) );
      // array.shift()
      // array.pop()
      // console.log('length: ' + checkLength);
      return false;
    }
  }
  console.log(array);
  return true;
}

function ShowResult(result) {
  if (result) {
    resultElem.innerText = `${inputVal} is a palindrome`
  } else {
    resultElem.innerText = `${inputVal} is not a palindrome`
  }
}
