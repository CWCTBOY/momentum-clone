const toDoForm = document.querySelector(".todo");
const toDoInput = document.querySelector(".todo_text");
const toDoList = document.querySelector(".todo-list");

toDoForm.addEventListener("submit", submitToDoForm);

function submitToDoForm(event) {
  event.preventDefault();
  const typedToDo = toDoInput.value;
  toDoInput.value = ``;
  paintToDo(typedToDo);
};

function paintToDo(a) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  toDoList.appendChild(li);
  li.appendChild(span);
  span.innerHTML = a;
  const btn = document.createElement("button");
  li.appendChild(btn);
  btn.innerHTML = `↩️`;
  btn.addEventListener("click", removeToDo);
};

function removeToDo(event) {
  const removeToDo = event.target.parentElement;
  removeToDo.remove();
}