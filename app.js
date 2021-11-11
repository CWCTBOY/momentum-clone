const logninForm = document.querySelector(".login");
const loginInput = document.querySelector(".login_input");
const sayHello = document.querySelector(".sayhello");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
  const userName = loginInput.value;
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, userName);
  console.log(`Hello, ${userName}!`);
  logninForm.classList.add(HIDDEN_CLASS);
  sayHello.classList.remove(HIDDEN_CLASS);
  sayHello.innerHTML = `Hello, ${userName}!`
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null)
{
  logninForm.classList.remove(HIDDEN_CLASS);
  logninForm.addEventListener("submit", loginSubmit);
} else
{
  sayHello.innerHTML = `Hello, ${savedUserName}!`;
  sayHello.classList.remove(HIDDEN_CLASS);
}