const loginForm = document.querySelector(".login");
const loginInput = document.querySelector(".login_input");
const sayHello = document.querySelector(".sayhello");

const HIDDEN_CLASSNAME = "hidden";
const TYPED_USERNAME = "username";

const savedLoginInput = localStorage.getItem(TYPED_USERNAME);

if (savedLoginInput === null)
{
  loginForm.addEventListener("submit", submitLoginForm);
} else
{
  isLocalStorageExist();
};

function submitLoginForm(event) {
  event.preventDefault();
  localStorage.setItem(TYPED_USERNAME, loginInput.value);
  isLocalStorageExist();
};//이벤트 함수

function isLocalStorageExist() {
  const toDoBox = document.querySelector(".todo-box");
  toDoBox.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = localStorage.getItem(TYPED_USERNAME);
  sayHello.innerHTML = `Hello, ${userName}!`;
};//반복함수