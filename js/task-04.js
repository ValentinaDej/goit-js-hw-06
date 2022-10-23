let counterValue = 0;

const decrBtn = document.querySelector("button[data-action='decrement']");
const incrBtn = document.querySelector("button[data-action='increment']");
const value = document.querySelector("#value");

decrBtn.addEventListener("click", handleDecrBtnClick);
incrBtn.addEventListener("click", handleIncrBtnClick);

function handleIncrBtnClick() {
  counterValue += 1;
  value.textContent = counterValue;
}

function handleDecrBtnClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}
