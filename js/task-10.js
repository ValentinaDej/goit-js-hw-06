const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const divBoxesEl = document.querySelector("div#boxes");
const inputNumberEl = document.querySelector("#controls > input");

btnCreateEl.addEventListener("click", getCount);
btnDestroyEl.addEventListener("click", destroyBoxes);

function getCount() {
  createBoxes(inputNumberEl.value);
}

function createBoxes(amount) {
  if (divBoxesEl.children.length > 0) {
    divBoxesEl.innerHTML = "";
  }

  let boxes = ``;
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    boxes += `<div style="background-color:${getRandomHexColor()}; width:${size}px; height:${size}px"></div>`;
    size += 10;
  }

  divBoxesEl.insertAdjacentHTML("beforeend", boxes);
}

function destroyBoxes() {
  divBoxesEl.innerHTML = "";
  inputNumberEl.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// початковий варіант виклику ф-ції
// btnCreateEl.addEventListener("click", () => {
//   createBoxes(inputNumberEl.value);
// });
