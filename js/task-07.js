const inputEl = document.querySelector("input#font-size-control");
const spanEl = document.querySelector("span#text");

document.addEventListener("DOMContentLoaded", changeFontSize);
inputEl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  spanEl.style.fontSize = `${inputEl.value}px`;
}
