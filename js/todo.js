const toDoForm = document.querySelector(".todo");
const toDoInput = document.querySelector(".todo_text");
const toDoList = document.querySelector(".todo-list");

const TODO_KEY = "todo";

let savedToDo = []; /* 상수일 경우 localStorage에 key-value가 있어도
                    savedToDo가 항상 공백이므로 이를 방지하기 위해 varType을
                    let으로 선언한다.(ref=>js.48)*/

toDoForm.addEventListener("submit", submitToDoForm);

function submitToDoForm(e) {
  e.preventDefault();
  const typedToDo = toDoInput.value;
  toDoInput.value = ``;
  const typedToDoObj = {
    id: Date.now(),
    text: typedToDo
  };
  savedToDo.push(typedToDoObj);
  paintToDo(typedToDoObj);
  pushLocalStorage();
};

function pushLocalStorage() {
  localStorage.setItem(TODO_KEY, JSON.stringify(savedToDo));
};

function paintToDo(typedToDo) {
  const li = document.createElement("li");
  li.id = typedToDo.id;
  const span = document.createElement("span");
  span.classList.add("todolist");
  toDoList.appendChild(li);
  li.appendChild(span);
  span.innerHTML = typedToDo.text;
  const removeIcon = document.createElement("i");
  removeIcon.classList.add("far")
  removeIcon.classList.add("fa-trash-alt")
  li.appendChild(removeIcon);
  removeIcon.addEventListener("click", removeToDo);
};

function removeToDo(listItem) {
  const removeToDo = listItem.target.parentElement;
  removeToDo.remove();
  savedToDo = savedToDo.filter(obj => obj.id !== parseInt(removeToDo.id)); // typeof obj.id = number && typeof removeToDo.id = string => execute parseInt func.
  pushLocalStorage(); // localStorage에 변화한 Array를 한번더 세팅시키기 위해 함수실행.
};

const localToDo = localStorage.getItem(TODO_KEY);

if (localToDo !== null)
{
  const transToArray = JSON.parse(localToDo);
  savedToDo = transToArray; // refresh할 때 savedToDo가 공백이 되지않도록 선언.
  transToArray.forEach(paintToDo);// savedToDo = transToArray로 선언 but ui에 보이기 하기위해 forEach func 실행  
}



