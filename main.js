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
const displayInputs = document.querySelector(".display-values");
const displayResult = document.querySelector(".display-result");
let stringVars = new String();
let arrayVars = new Array();

// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const operations = e.target.dataset.operation;
//     if (operations === "=") {
//       let operationOption = arrayVars[1];
//       arrayVars.splice(1, 1);
//       let arrayNumbers = arrayVars.map((stringNumber) => {
//         return Number(stringNumber);
//       });
//       displayInputs.innerHTML = operator(operationOption, arrayNumbers);
//       displayResult.innerHTML = operator(operationOption, arrayNumbers);
//       stringVars = String(operator(operationOption, arrayNumbers));
//     } else if (button.className === "operation" && operations !== "=") {
//       stringVars += " " + operations + " ";
//       arrayVars = stringVars.split(/ /g);
//       displayInputs.innerHTML = stringVars.replace(/ /g, "");
//     } else {
//       stringVars += operations;
//       arrayVars = stringVars.split(/ /g);
//       displayInputs.innerHTML = stringVars.replace(/ /g, "");
//     }
//   });
// });

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const operations = e.target.dataset.operation;
    if (operations === "=") {
      let operationOption = arrayVars[1];
      arrayVars.splice(1, 1);
      let arrayNumbers = arrayVars.map((stringNumber) => {
        return Number(stringNumber);
      });
      displayInputs.innerHTML = operator(operationOption, arrayNumbers);
      stringVars = String(operator(operationOption, arrayNumbers));
    } else if (button.className === "operation" && operations !== "=") {
      stringVars += " " + operations + " ";
      arrayVars = stringVars.split(/ /g);
      displayInputs.innerHTML = stringVars.replace(/ /g, "");
    } else {
      stringVars += operations;
      arrayVars = stringVars.split(/ /g);
      displayInputs.innerHTML = stringVars.replace(/ /g, "");
    }
    if (arrayVars[1] === "-") {
      arrayVars[2] = -arrayVars[2];
      arrayVars.splice(0, 2);
    }
  });
});
