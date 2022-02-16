export function getTodoInputItems(todoInputWrapper) {
  const todoInput = todoInputWrapper.querySelector(".todo-input");
  const todoButton = todoInputWrapper.querySelector(".todo-button");

  return {
    todoInput,
    todoButton,
  };
}

export function validateTodoInput(todoInputWrapper) {
  const { todoInput, todoButton } = getTodoInputItems(todoInputWrapper);

  if (todoInput.value.length >= 3) {
    todoButton.classList.remove("todo-button_disabled");
  } else {
    todoButton.classList.add("todo-button_disabled");
  }
}
export function preventEnter(event) {
  if (event.keyCode === 13 && event.target.value.length < 3) {
    event.preventDefault();
    return false;
  }
}
export function clearTodoInput(todoInputWrapper) {
  const { todoInput, todoButton } = getTodoInputItems(todoInputWrapper);

  todoInput.value = "";
  todoButton.classList.add("todo-button_disabled");
}
