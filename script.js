const todoDescription = document.querySelector("#todo");
const btnAdd = document.querySelector("#add-todo");
const list = document.querySelector("#todos");

const todos = [
  { description: "JS lernen", done: false, id: 1 },
  { description: "Schwimmen gehen", done: false, id: 2 },
];

btnAdd.addEventListener("click", addTodo);

function addTodo() {
  const todoText = todoDescription.value;
  const newTodo = {
    description: todoText,
    done: false,
    id: Math.floor(Math.random() * 900000),
  };

  todos.push(newTodo);
  renderTodos();
}

function renderTodos() {
  list.innerHTML = "";

  for (let element of todos) {
    const listEl = document.createElement("li");
    listEl.innerText = element.description;

    list.append(listEl);
  }
}

renderTodos();
