window.onload = function () {
  let createButtonElement = document.querySelector(
    '.add-row-panel > input[type="button"]'
  );
  createButtonElement.addEventListener("click", createRowElement);

  let UpElement = document.querySelector(".pageup");
  UpElement.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
};
function createRowElement() {
  let ImgUrlInputElement = document.querySelector("#img-url");
  let courseTitleElement = document.querySelector("#course-title");
  let courseAuthorNameElement = document.querySelector("#course-author-name");
  let courseDescription = document.querySelector("#course-description");
  let courseLevelElement = document.querySelector("#course-level");
  let coursePriceElement = document.querySelector("#course-price");

  let tbodyElement = document.querySelector("tbody");
  let trElement = document.createElement("tr");
  trElement.setAttribute("data-generated", "");
  tbodyElement.appendChild(trElement);
  let lastTr = tbodyElement.lastChild;

  let imgTd = document.createElement("td");
  imgTd.appendChild(document.createElement("img"));
  imgTd.lastChild.setAttribute("src", ImgUrlInputElement.value);
  lastTr.appendChild(imgTd);

  let courseTitleTd = document.createElement("td");
  courseTitleTd.textContent = courseTitleElement.value;
  lastTr.appendChild(courseTitleTd);

  let courseAuthorNameTd = document.createElement("td");
  courseAuthorNameTd.textContent = courseAuthorNameElement.value;
  lastTr.appendChild(courseAuthorNameTd);

  let courseDescriptionTd = document.createElement("td");
  courseDescriptionTd.textContent = courseDescription.value;
  lastTr.appendChild(courseDescriptionTd);

  let courseLevelTd = document.createElement("td");
  courseLevelTd.textContent =
    courseLevelElement.options[courseLevelElement.selectedIndex].text;
  lastTr.appendChild(courseLevelTd);

  let coursePriceTd = document.createElement("td");
  coursePriceTd.textContent = coursePriceElement.value + "₽";
  lastTr.appendChild(coursePriceTd);

  let editButtonTd = document.createElement("td");
  editButtonTd.appendChild(document.createElement("input"));
  editButtonTd.lastChild.setAttribute("type", "button");
  editButtonTd.lastChild.value = "✏️";
  editButtonTd.lastChild.setAttribute("onclick", "editRowElement(this)");
  lastTr.appendChild(editButtonTd);
}
function editRowElement(el) {
  document.querySelector(".add-row-panel__title").textContent =
    "Форма для редактирования строки";
  let currentTrElement = el.closest("tr");

  let editButtons = document.querySelectorAll('input[type="button"]');
  editButtons.forEach((editButton) => {
    editButton.classList.add("d-none");
  });

  let ImgUrlInputElement = document.querySelector("#img-url");
  ImgUrlInputElement.value =
    currentTrElement.cells[0].childNodes[0].getAttribute("src");
  let courseTitleElement = document.querySelector("#course-title");
  courseTitleElement.value = currentTrElement.cells[1].textContent;
  let courseAuthorNameElement = document.querySelector("#course-author-name");
  courseAuthorNameElement.value = currentTrElement.cells[2].textContent;
  let courseDescription = document.querySelector("#course-description");
  courseDescription.value = currentTrElement.cells[3].textContent;
  let courseLevelElement = document.querySelector("#course-level");
  courseLevelElement.value = currentTrElement.cells[4].textContent;
  let coursePriceElement = document.querySelector("#course-price");
  coursePriceElement.value = currentTrElement.cells[5].textContent.slice(0, -1);

  let createRowButtonElement = document.querySelector("#send-button");
  createRowButtonElement.classList.add("d-none");

  let saveButtonElement = document.createElement("input");
  saveButtonElement.setAttribute("type", "button");
  saveButtonElement.setAttribute("value", "Сохранить строку");
  saveButtonElement.setAttribute(
    "onclick",
    "saveRowElement(" + currentTrElement.rowIndex + ")"
  );

  let deleteButtonElement = document.createElement("input");
  deleteButtonElement.setAttribute("type", "button");
  deleteButtonElement.setAttribute("value", "Удалить строку");
  deleteButtonElement.setAttribute(
    "onclick",
    "deleteRowElement(" + currentTrElement.rowIndex + ")"
  );

  let addRowPanelElement = document.querySelector(".add-row-panel");

  addRowPanelElement.appendChild(saveButtonElement);
  addRowPanelElement.appendChild(deleteButtonElement);
}

function deleteRowElement(rowIndex) {
  let tbodyElement = document.querySelector("tbody");
  tbodyElement.removeChild(tbodyElement.childNodes[rowIndex - 1]);
  let addRowPanelElement = document.querySelector(".add-row-panel");
  addRowPanelElement.removeChild(
    document.querySelector('.add-row-panel > [value="Сохранить строку"]')
  );
  addRowPanelElement.removeChild(
    document.querySelector('.add-row-panel > [value="Удалить строку"]')
  );
  let createRowButtonElement = document.querySelector(
    '.add-row-panel > [value="Создать строку"]'
  );
  createRowButtonElement.classList.remove("d-none");

  let editButtons = document.querySelectorAll('input[type="button"]');
  editButtons.forEach((editButton) => {
    editButton.classList.remove("d-none");
  });

  document.querySelector(".add-row-panel__title").textContent =
    "Форма для создания строки";
}

function saveRowElement(rowIndex) {
  let ImgUrlInputElement = document.querySelector("#img-url");
  let courseTitleElement = document.querySelector("#course-title");
  let courseAuthorNameElement = document.querySelector("#course-author-name");
  let courseDescription = document.querySelector("#course-description");
  let courseLevelElement = document.querySelector("#course-level");
  let coursePriceElement = document.querySelector("#course-price");

  let currentTrElement =
    document.querySelector("tbody").childNodes[rowIndex - 1];

  currentTrElement.cells[0].childNodes[0].setAttribute(
    "src",
    ImgUrlInputElement.value
  );
  currentTrElement.cells[1].textContent = courseTitleElement.value;
  currentTrElement.cells[2].textContent = courseAuthorNameElement.value;
  currentTrElement.cells[3].textContent = courseDescription.value;
  currentTrElement.cells[4].textContent =
    courseLevelElement.options[courseLevelElement.selectedIndex].text;
  currentTrElement.cells[5].textContent = coursePriceElement.value + "₽";

  let addRowPanelElement = document.querySelector(".add-row-panel");

  addRowPanelElement.removeChild(
    document.querySelector('.add-row-panel > [value="Сохранить строку"]')
  );
  addRowPanelElement.removeChild(
    document.querySelector('.add-row-panel > [value="Удалить строку"]')
  );

  let createRowButtonElement = document.querySelector(
    '.add-row-panel > [value="Создать строку"]'
  );
  createRowButtonElement.classList.remove("d-none");

  let editButtons = document.querySelectorAll('input[type="button"]');
  editButtons.forEach((editButton) => {
    editButton.classList.remove("d-none");
  });

  document.querySelector(".add-row-panel__title").textContent =
    "Форма для создания строки";
}