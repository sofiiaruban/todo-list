import "../styles/index.css";
import "../index.html";

import { getTodoItem } from "./addTodoItem";
import { saveTodoToSStorage, getTodosFromSStorage} from "./sessionStorage";
import { filterTodoItems } from "./filterTodoItems";
import {
  clearTodoInput,
  getTodoInputItems,
  validateTodoInput,
  preventEnter,
  getTodoHelper,
  lostTodoHelper,
} from "./todoInput";
import {toggleDisableSelect} from "./toggleDisableSelect";

const todoInputWrapper = document.querySelector(".todo-input-wrapper");
const { todoInput, todoButton } = getTodoInputItems(todoInputWrapper);
const todoList = document.querySelector(".todo-list");
const todoSelect = document.querySelector(".todo-select");
export { todoSelect };

document.addEventListener("DOMContentLoaded", onDOMLoaded);
todoInput.addEventListener("input", () => validateTodoInput(todoInputWrapper));
todoButton.addEventListener("click", addTodo);
todoInput.addEventListener("focus", () => getTodoHelper(todoInputWrapper));
todoInput.addEventListener("blur", () => lostTodoHelper(todoInputWrapper));
todoInput.addEventListener("input", () => getTodoHelper(todoInputWrapper));
todoButton.addEventListener("click", toggleDisableSelect);
todoInput.addEventListener("keydown",  preventEnter);
todoSelect.addEventListener("change", filterTodos);


function onDOMLoaded(event) {
  event.preventDefault();
  renderTodosFromSStorage();
  toggleDisableSelect();
  validateTodoInput(todoInputWrapper);
}

function renderTodosFromSStorage() {
  let todos = getTodosFromSStorage();
  todos.forEach((todoValue) => {
    const todoItem = getTodoItem(todoValue.todotext);
    todoList.appendChild(todoItem);
    console.log(todoValue.status);
    if (todoValue.status === "completed") {
    todoItem.classList.add("todo-item_completed");
    }
    // Add todo item to list  
  });
}

function addTodo(event) {
  event.preventDefault();

  saveTodoToSStorage(todoInput.value, "uncompleted");

  const todoItem = getTodoItem(todoInput.value);
  todoList.appendChild(todoItem);

  clearTodoInput(todoInputWrapper);
}

function filterTodos(e) {
  const todoItems = todoList.childNodes;

  filterTodoItems(todoItems, e.target.value);
}

// TODO fix bugs:
// 1. select should be disabled when no option is displayed
// 2. forbid form submit with enter key, when input value is less than 3 characters
// 3. when todoInput is not in focus, helper text should not be displayed
// 4. save to session storage todo state: completed, not completed - and update it
