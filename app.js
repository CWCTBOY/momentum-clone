const logninForm = document.querySelector(".login");
const loginInput = document.querySelector(".login_input");
const sayHello = document.querySelector(".sayhello");

const HIDDEN_CLASS = "hidden";


function loginInputSubmit(event) {
  const userName = loginInput.value;
  event.preventDefault();
  console.log(`Hello, ${userName}!`);
  logninForm.classList.add(HIDDEN_CLASS);
  sayHello.classList.remove(HIDDEN_CLASS);
  sayHello.innerHTML = `Hello, ${userName}!`
};

logninForm.addEventListener("submit", loginInputSubmit);