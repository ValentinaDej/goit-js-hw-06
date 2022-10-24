const formeEl = document.querySelector("form.login-form");

formeEl.addEventListener("submit", handlerformElSubmit);

function handlerformElSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  let formElField;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    formElField = {
      email: email.value,
      password: password.value,
    };
  }
  console.log(formElField);
  event.currentTarget.reset();
}
