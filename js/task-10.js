const btnCreateEl = document.querySelector("button[data-create]");

btnCreateEl.addEventListener("click", () => {
  console.log(btnCreateEl);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
