
export function getTodoInputItems(todoInputWrapper) {
  const todoInput = todoInputWrapper.querySelector(".todo-input");
  const todoHelper = todoInputWrapper.querySelector(".todo-helper");
  const todoButton = todoInputWrapper.querySelector(".todo-button");

  return {
    todoInput,
    todoHelper,
    todoButton,
  };
}
export function getTodoHelper(todoInputWrapper){
  const { todoInput, todoHelper} =
    getTodoInputItems(todoInputWrapper);
  if (todoInput.value.length >= 3) {
    todoHelper.classList.remove("todo-helper_visible");
  } else {
    todoHelper.classList.add("todo-helper_visible");
  }
}
export function lostTodoHelper(todoInputWrapper){
  const { todoInput, todoHelper} =
    getTodoInputItems(todoInputWrapper);
    todoHelper.classList.remove("todo-helper_visible");
}
export function validateTodoInput(todoInputWrapper) {
  const { todoInput, todoHelper, todoButton } =
    getTodoInputItems(todoInputWrapper);

  if (todoInput.value.length >= 3) {
    todoButton.classList.remove("todo-button_disabled");
    //todoHelper.classList.remove("todo-helper_visible");
  } else {
    todoButton.classList.add("todo-button_disabled");
    //todoHelper.classList.add("todo-helper_visible");
  }
}
export function preventEnter(event) {
  if (event.keyCode === 13 && event.target.value.length < 3) {
    event.preventDefault();
    return false;
  };
}
export function clearTodoInput(todoInputWrapper) {
  const { todoInput, todoHelper, todoButton } =
    getTodoInputItems(todoInputWrapper);

  todoInput.value = "";
  todoButton.classList.add("todo-button_disabled");
  todoHelper.classList.remove("todo-helper_visible");
}
