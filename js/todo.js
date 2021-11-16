const toDoForm = document.querySelector(".todo");
const toDoList = document.querySelector(".todo-list");
const toDoText = document.querySelector(".todo_text");

function submitToDoForm(event) {
  event.preventDefault();
  const toDO = toDoText.value;
  localStorage.setItem("todo", toDO);
  toDO = ``;
};

toDoForm.addEventListener("submit", submitToDoForm);