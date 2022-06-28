window.addEventListener("load", () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  const newTodoForm = document.querySelector("#createForm");

  newTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = {
      content: e.target.elements.content.value,
      done: false,
    };

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));

    e.target.reset();

    Displaytodos();
  });
});

function Displaytodos() {
  const todoList = document.querySelector("#list");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todoContent");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const content = document.createElement("div");
    const action = document.createElement("div");
    const edit = document.createElement("button");
    const deleteButton = document.createElement("button");

    Input.type = "checkbox";
    input.checked = todo.done;

    content.classList.add("todoContent");
    actions.classList.add("actions");
    edit.classList.add("edit");
    deleteButton.classList.add("delete");

    content.innerHTML = `<input type = "text" value = ${todo.content} readonly/>`;
    edit.innerHTML = "Edit";
    deleteButton.innerHTML = "delete";
    label.appendChild(input);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    todoList.appendChild(todoItem);
  });
}
