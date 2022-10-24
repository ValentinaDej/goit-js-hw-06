//вважаємо що допустимо вводити будь-які символи, втч пробіли

const inputEl = document.querySelector("input#validation-input");

inputEl.addEventListener("blur", handleinputElBlur);

function handleinputElBlur(event) {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else if (event.currentTarget.value.length > 0) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  }
}
