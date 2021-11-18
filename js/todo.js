const toDoForm = document.querySelector(".todo");
const toDoInput = document.querySelector(".todo_text");
const toDoList = document.querySelector(".todo-list");

const TODO_KEY = "todo";

let savedToDo = []; /* 상수일 경우 localStorage에 key-value가 있어도
                    savedToDo가 항상 공백이므로 이를 방지하기 위해 varType을
                    let으로 선언한다.(ref=>js.48)*/

toDoForm.addEventListener("submit", submitToDoForm);

function submitToDoForm(event) {
  event.preventDefault();
  const typedToDo = toDoInput.value;
  toDoInput.value = ``;
  savedToDo.push(typedToDo);
  paintToDo(typedToDo);
  pushLocalStorage();
};

function pushLocalStorage() {
  localStorage.setItem(TODO_KEY, JSON.stringify(savedToDo));
};

function paintToDo(typedToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  toDoList.appendChild(li);
  li.appendChild(span);
  span.innerHTML = typedToDo;
  const btn = document.createElement("button");
  li.appendChild(btn);
  btn.innerHTML = `↩️`;
  btn.addEventListener("click", removeToDo);
};

function removeToDo(event) {
  const removeToDo = event.target.parentElement;
  removeToDo.remove();
};

const localToDo = localStorage.getItem(TODO_KEY);

if (localToDo !== null)
{
  const transToArray = JSON.parse(localToDo);
  savedToDo = transToArray;
  transToArray.forEach(paintToDo);
}