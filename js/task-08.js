const formeEl = document.querySelector("form.login-form");

formeEl.addEventListener("submit", handlerformElSubmit);

function handlerformElSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }

  const formElField = {
    email: email.value,
    password: password.value,
  };

  console.log(formElField);
  event.currentTarget.reset();
}
