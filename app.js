const loginForm = document.querySelector(".login");
const loginInput = document.querySelector(".login .login_input");

function submitLoginForm(event) {
  event.preventDefault();
  console.log("Hello", loginInput.value + ".")
}

loginForm.addEventListener("submit", submitLoginForm);