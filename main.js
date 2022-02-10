// basic calculator functions
const numbers = new Array();
const add = (a, b) => {
  return a + b;
};
const substract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};
const operator = (operation, numbers) => {
  if (operation === "+") {
    return add(...numbers);
  } else if (operation === "-") {
    return substract(...numbers);
  } else if (operation === "x") {
    return multiply(...numbers);
  } else if (operation === "/") {
    return divide(...numbers);
  }
};

// Dom interaction
const buttons = document.querySelectorAll("button");
const displayResult = document.querySelector(".display-values");

let stringValues = "";
let matchNumbersStringArray;
let matchOperationsArray = [];
let matchNumbersArray;
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.dataset.operation;
    if (value !== "=" && value !== "-") {
      stringValues += value;
    } else if (value === "-") {
      stringValues += "+" + value;
    } else if (value === "=" && matchNumbersStringArray !== null) {
      let operation = matchOperationsArray[0];
      let result = operator(operation, matchNumbersArray).toFixed(2);
      displayResult.innerHTML = result;
      stringValues = `${result}`;
      matchOperationsArray = [];
      return;
    }
    matchNumbersStringArray = stringValues.match(
      /\-?\d+\.\d+|\-?\d+|\-?\.\d+/g
    );
    matchOperationsArray = stringValues.match(/\+|x|\//g);
    if (matchNumbersStringArray !== null) {
      matchNumbersArray = matchNumbersStringArray.map((numberString) => {
        return Number(numberString);
      });
    }
    displayResult.innerHTML = stringValues.replace(/\+\-/g, "-");
  });
});
