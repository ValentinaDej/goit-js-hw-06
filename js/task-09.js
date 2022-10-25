const btnChangeColorEl = document.querySelector("button.change-color");
const spanColorEl = document.querySelector("span.color");

btnChangeColorEl.addEventListener("click", handlerBtnlClick);

function handlerBtnlClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColorEl.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
