const inNameEl = document.querySelector("input#name-input");
const outNameEl = document.querySelector("span#name-output");

inNameEl.addEventListener("input", handleNameInput);

function handleNameInput(event) {
  outNameEl.textContent =
    event.currentTarget.value.trim() !== ""
      ? event.currentTarget.value
      : "Anonymous";
}
