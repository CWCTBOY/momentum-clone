const logninForm = document.querySelector(".login");
const loginInput = document.querySelector(".login_input");
const display = document.querySelector(".display");

const HIDDEN_CLASS = "hidden";


function loginInputSubmit(event) {
  const userName = loginInput.value;
  event.preventDefault();
  console.log(`Hello, ${userName}!`);
  logninForm.classList.add(HIDDEN_CLASS);
  display.classList.remove(HIDDEN_CLASS);
  display.innerHTML = `Hello, ${userName}!`
};

logninForm.addEventListener("submit", loginInputSubmit);