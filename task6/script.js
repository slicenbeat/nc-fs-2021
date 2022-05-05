window.onload = function () {
  //заполняем поля введенными ранее данными
  let inputElements = document.querySelectorAll(".ad__input");
  for (let inputElement of inputElements) {
    inputElement.value = localStorage.getItem(inputElement.id);
  }
  let requiredInputElements =
    document.getElementsByClassName("ad__required-input");
  let phoneElement = document.getElementById("phone");
  let emailElement = document.getElementById("email");
  let sendButtonElement = document.getElementById("sendButton");
  let emptyStringRegexp = /^$|^\s+$/;
  let emailStringRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phoneStringRegexp = /\+(\d{1})\((\d{3})\)(\d{2})-(\d{2})-(\d{3})/g;

  sendButtonElement.addEventListener("click", checkSend);
  phoneElement.addEventListener("input", phoneMask);

  console.log(inputElements);

  //валидация
  function checkSend() {
    let errorInputLabels = [];

    //валидация на пустые строки
    for (let requiredInputElement of requiredInputElements) {
      if (requiredInputElement.value.match(emptyStringRegexp)) {
        errorInputLabels.push(requiredInputElement.labels[0].textContent);
      }
    }

    //валидация email
    if (!errorInputLabels.includes("E-mail")) {
      if (!emailElement.value.match(emailStringRegexp)) {
        errorInputLabels.push(emailElement.labels[0].textContent);
      }
    }

    //валидация phone
    if (phoneElement.value != "") {
      if (!phoneElement.value.match(phoneStringRegexp)) {
        errorInputLabels.push(phoneElement.labels[0].textContent);
      }
    }

    if (errorInputLabels.length === 0) {
      let firstName = document.getElementById("firstName").value;
      let lastName = document.getElementById("lastName").value;
      writeCookie(firstName, lastName);
    } else if (errorInputLabels.length === 1) {
      errorInputLabelsString = errorInputLabels[0];
      alert(
        `Поле ${errorInputLabelsString} заполнено неверно… Пожалуйста, исправьте!`
      );
    } else {
      errorInputLabelsString = errorInputLabels.join(", ");
      alert(
        `Поля ${errorInputLabelsString} заполнены неверно… Пожалуйста, исправьте!`
      );
    }
  }

  //маска для номера — +X(XXX)XX-XX-XXX
  function phoneMask() {
    let x = phoneElement.value
      .replace(/\D/g, "")
      .match(/(\d{1})(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,3})/);
    if (x === null) {
      phoneElement.value = "";
      return;
    }
    phoneElement.value =
      (!x[2] ? "+" + x[1] : "+" + x[1] + "(" + x[2]) +
      (!x[3] ? "" : ")" + x[3]) +
      (!x[4] ? "" : "-" + x[4]) +
      (!x[5] ? "" : "-" + x[5]);
  }
  //функция для установки куки
  function writeCookie(firstName, lastName) {
    let name = encodeURIComponent(
      firstName.toLowerCase() + lastName.toLowerCase()
    );
    let value = encodeURIComponent(firstName + " " + lastName);

    if (document.cookie.indexOf(name + "=") != -1) {
      alert(`${firstName} ${lastName}, ваше обращение обрабатывается!`);
    } else {
      document.cookie = name + "=" + value;
      alert(`${firstName} ${lastName}, спасибо за обращение!`);
    }
  }
};

window.onunload = function () {
  let inputElements = document.querySelectorAll(".ad__input");
  for (let inputElement of inputElements) {
    localStorage.setItem(inputElement.id, inputElement.value);
  }
};