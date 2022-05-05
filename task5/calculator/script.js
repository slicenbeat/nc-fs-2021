let sum = (a, b) => a + b;
let subtraction = (a, b) => a - b;
let percentage = (a, b) => a % b;
let division = (a, b) => a / b;
let multiplication = (a, b) => a * b;
let erection = (a, b) => Math.pow(a, b);
let sqrt = (a) => Math.sqrt(a);




function number(num) {
  let firstOperand = document.getElementById(
    "calculator__first-operand"
  ).innerText;
  let secondOperand = document.getElementById(
    "calculator__second-operand"
  ).innerText;
  let calcOperator = document.getElementById(
    "calculator__operator-span"
  ).innerText;

  if (firstOperand === "" || firstOperand === "0") {
    document.getElementById("calculator__first-operand").innerText = num;
    return;
  }
  if (
    (num === "." &&
      (firstOperand[firstOperand.length - 1] === num ||
        secondOperand[secondOperand.length - 1] === num)) ||
    (num === "0" &&
      ((firstOperand[0] === "0" && firstOperand.length === 1) ||
        (secondOperand[0] === "0" && secondOperand.length === 1)))
  ) {
    return;
  }

  if (document.getElementById("calculator__operator").disabled) {
    document.getElementById("calculator__operator").disabled = false;
  }
  if ((firstOperand && secondOperand) || (firstOperand && calcOperator)) {
    document.getElementById("calculator__second-operand").innerText += num;
  } else {
    document.getElementById("calculator__first-operand").innerText += num;
  }
}

function operator(op) {
  if (document.getElementById("calculator__operator").disabled) {
    return;
  }

  document.getElementById("calculator__operator").disabled = true;
  firstOperand = document.getElementById("calculator__first-operand").innerText;
  secondOperand = document.getElementById(
    "calculator__second-operand"
  ).innerText;
  calcOperator = document.getElementById("calculator__operator-span").innerText;

  if (op === "-" && firstOperand === "") {
    document.getElementById("calculator__first-operand").innerText = op;
    return;
  } else if (op != "-" && firstOperand === "") {
    return;
  } else {
    if (firstOperand && op === "√" && calcOperator === "") {
      document.getElementById("calculator__first-operand").innerText =
        computation(firstOperand, "", op);
      document.getElementById("calculator__operator").disabled = false;
    } else if (firstOperand && calcOperator === "") {
      document.getElementById("calculator__operator-span").innerText = op;
    } else if (firstOperand && calcOperator && secondOperand && op != "√") {
      firstOperand = document.getElementById(
        "calculator__first-operand"
      ).innerText = computation(firstOperand, secondOperand, calcOperator);
      document.getElementById("calculator__second-operand").innerText = "";
      document.getElementById("calculator__operator-span").innerText = op;
      document.getElementById("calculator__operator").disabled = true;
    } else {
      document.getElementById("calculator__first-operand").innerText =
        computation(firstOperand, secondOperand, calcOperator);
    }
  }
}

function computation(a, b, calcOperator) {
  a = Number(a);
  b = Number(b);
  let res;
  switch (calcOperator) {
    case "+":
      res = sum(a, b);
      break;
    case "-":
      res = subtraction(a, b);
      break;
    case "%":
      res = percentage(a, b);
      break;
    case "÷":
      res = division(a, b);
      break;
    case "×":
      res = multiplication(a, b);
      break;
    case "^":
      res = erection(a, b);
      break;
    case "√":
      res = sqrt(a);
      break;
  }
  // const f = (x) =>
  //   x.toString().includes(".") ? x.toString().split(".").pop().length : 0;
  // if (f(res.toString()) > 8) {
  //   res = res.toFixed(8);
  // }
  setHistory(a, b, calcOperator, res);

  function setHistory(a, b, calcOperator, result) {
    if (calcOperator == "√") {
      document.getElementById(
        "calculator__history"
      ).textContent += `${result} = ${calcOperator}${a}  \r\n \r\n`;
    } else {
      document.getElementById(
        "calculator__history"
      ).textContent += `${result} = ${a} ${calcOperator} ${b} \r\n \r\n`;
    }
  }
  return res;
}

function equals() {
  let firstOperand = document.getElementById(
    "calculator__first-operand"
  ).innerText;
  let secondOperand = document.getElementById(
    "calculator__second-operand"
  ).innerText;
  let calcOperator = document.getElementById(
    "calculator__operator-span"
  ).innerText;

  if (firstOperand && secondOperand && calcOperator) {
    document.getElementById("calculator__first-operand").innerText =
      computation(firstOperand, secondOperand, calcOperator);
    document.getElementById("calculator__second-operand").innerText = "";
    document.getElementById("calculator__operator-span").innerText = "";
  } else if (firstOperand && calcOperator) {
    document.getElementById("calculator__operator-span").innerText = "";
  } 
}

function clearAll() {
  document.getElementById("calculator__first-operand").innerText = "";
  document.getElementById("calculator__second-operand").innerText = "";
  document.getElementById("calculator__operator-span").innerText = "";
  document.getElementById("calculator__operator").disabled = false;
}

let backspace = () => {
  let firstOperand = document.getElementById(
    "calculator__first-operand"
  ).innerText;
  let secondOperand = document.getElementById(
    "calculator__second-operand"
  ).innerText;
  let calcOperator = document.getElementById(
    "calculator__operator-span"
  ).innerText;

  if (firstOperand && secondOperand && calcOperator) {
    document.getElementById("calculator__second-operand").innerText =
      secondOperand.slice(0, -1);
    if (
      document.getElementById("calculator__second-operand").innerText === ""
    ) {
      document.getElementById("calculator__operator").disabled = true;
    }
  } else if (firstOperand && calcOperator) {
    document.getElementById("calculator__operator-span").innerText =
      calcOperator.slice(0, -1);
    if (document.getElementById("calculator__operator").disabled === true) {
      document.getElementById("calculator__operator").disabled = false;
    }
  } else if (firstOperand) {
    document.getElementById("calculator__first-operand").innerText =
      firstOperand.slice(0, -1);
    if (document.getElementById("calculator__operator").disabled === true) {
      document.getElementById("calculator__operator").disabled = false;
    }
  } 
};

function getHistory() {
  let classListCalculator__history = document.getElementById("calculator__history").classList;
  if (classListCalculator__history.contains("calculator__history_display_flex")) {
    classListCalculator__history.add("calculator__history_display_none");
    classListCalculator__history.remove("calculator__history_display_flex");
  } 
  else {
    classListCalculator__history.add("calculator__history_display_flex");
    classListCalculator__history.remove("calculator__history_display_none");
  }
}
