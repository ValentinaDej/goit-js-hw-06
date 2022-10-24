const btnChangeColorEl = document.querySelector("button.change-color");
const spanColorEl = document.querySelector("span.color");

btnChangeColorEl.addEventListener("click", handlerBtnlClick);

function handlerBtnlClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
