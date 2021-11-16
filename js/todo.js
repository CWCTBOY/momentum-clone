const toDoForm = document.querySelector(".todo");
const toDoList = document.querySelector(".todo-list");
const toDoText = document.querySelector(".todo_text");

function savedToDo() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(btn);
  span.innerHTML = `${typedToDo}`;
};

const typedToDo = localStorage.getItem("todo");

if (typedToDo === null)
{
  toDoForm.addEventListener("submit", submitToDoForm);
} else
{
  savedToDo();
}

function submitToDoForm(event) {
  event.preventDefault();
  const toDo = toDoText.value;
  localStorage.setItem("todo", toDo);
  toDoText.value = ``;
  savedToDo(typedToDo);
};



