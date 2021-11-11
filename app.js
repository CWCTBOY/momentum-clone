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
  sayHello.innerHTML = `Hello, ${userName}!`;
  sayHello.classList.remove(HIDDEN_CLASS);
} //main function

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null)
{
  logninForm.classList.remove(HIDDEN_CLASS);
  logninForm.addEventListener("submit", loginSubmit);
} else
{
  isLocalStorageExist(savedUserName);
}//isLocalStorageExisst-condition

function isLocalStorageExist(username) {
  sayHello.innerHTML = `Hello, ${username}!`;
  sayHello.classList.remove(HIDDEN_CLASS);
}//반복문장 축소함수