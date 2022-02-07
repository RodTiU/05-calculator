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
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
