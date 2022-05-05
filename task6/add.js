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

  //валидация
  function checkSend() {
    let inputElements = document.querySelectorAll(".ad__input");
    for (let inputElement of inputElements) {
      inputElement.classList.remove("ad__input_box-shadow_red");
    }

    let errorInputElements = [];

    //валидация на пустые строки
    for (let requiredInputElement of requiredInputElements) {
      if (requiredInputElement.value.match(emptyStringRegexp)) {
        errorInputElements.push(requiredInputElement);
      }
    }

    //валидация email
    if (!errorInputElements.includes("E-mail")) {
      if (!emailElement.value.match(emailStringRegexp)) {
        errorInputElements.push(emailElement);
      }
    }

    //валидация phone
    if (phoneElement.value != "") {
      if (!phoneElement.value.match(phoneStringRegexp)) {
        errorInputElements.push(phoneElement);
      }
    }

    if (errorInputElements.length === 0) {
      writeCookie(firstName, lastName);
    } else {
      for (let errorInputElement of errorInputElements) {
        errorInputElement.classList.add("ad__input_box-shadow_red");
      }
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
