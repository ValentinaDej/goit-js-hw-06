const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const divBoxesEl = document.querySelector("div#boxes");
const inputNumberEl = document.querySelector("#controls > input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getCount() {
  createBoxes(inputNumberEl.value);
}

const createBoxes = (amount) => {
  let boxes = ``;
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    size += 10;
    let colorCalc = getRandomHexColor();
    boxes += `<div style="background-color:${colorCalc}; width:${size}px; height:${size}px"></div>`;
  }

  divBoxesEl.insertAdjacentHTML("beforeend", boxes);
};

const destroyBoxes = () => {
  divBoxesEl.innerHTML = "";
  inputNumberEl.value = "";
};

btnCreateEl.addEventListener("click", getCount);
btnDestroyEl.addEventListener("click", destroyBoxes);

// початковий варіант виклику ф-ції
// btnCreateEl.addEventListener("click", () => {
//   createBoxes(inputNumberEl.value);
// });
