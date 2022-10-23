const formeEl = document.querySelector("form.login-form");

formeEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  let formeElField;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    formeElField = {
      email: email.value,
      password: password.value,
    };
  }

  console.log(formeElField);

  event.currentTarget.reset();
});
