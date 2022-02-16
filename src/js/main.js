import "../style.css";
import "../index.html";

import { getTodoItem } from "./addTodoItem";
import {
  saveTodoToSStorage,
  getTodosFromSStorage,
  getCurPageFromSStorage,
  saveCurPageToSStorage
} from "./sessionStorage";
import {
  clearTodoInput,
  getTodoInputItems,
  validateTodoInput,
  preventEnter,
} from "./todoInput";
import {
  changePage,
  selectedPage,
  checkButtonOpacity,
  prevPage,
  nextPage,
  clickPage,
  pageNumbers,
  numPages,
  renderChangedPage, 
  
} from "./pagination";

const todoInputWrapper = document.querySelector(".todo-input-wrapper");
const { todoInput, todoButton } = getTodoInputItems(todoInputWrapper);
const todoList = document.querySelector(".todo-list");
export { todoList };
const paginationBtns = document.querySelector(".pagination-container");

const prevButton = document.getElementById("button_prev");
const nextButton = document.getElementById("button_next");
export { prevButton, nextButton };

document.addEventListener("DOMContentLoaded", onDOMLoaded);
todoInput.addEventListener("input", () => validateTodoInput(todoInputWrapper));
todoButton.addEventListener("click", addTodo);
todoInput.addEventListener("keydown", preventEnter);
prevButton.addEventListener("click", prevPage);
nextButton.addEventListener("click", nextPage);

function onDOMLoaded(event) {
  event.preventDefault();
  renderTodosFromSStorage();
  validateTodoInput(todoInputWrapper);
  //saveCurPageToSStorage(1);
  getCurPageFromSStorage();
  changePage();
  pageNumbers();
  selectedPage();
  checkButtonOpacity();
  clickPage();
  showPagination();
}


export function renderTodosFromSStorage() {
  let currentPage = getCurPageFromSStorage();
  let todos = changePage(currentPage);
  todoList.innerHTML = "";
  todos.forEach((todoValue) => {
    const todoItem = getTodoItem(todoValue.todotext);
    todoList.appendChild(todoItem);
  });
}
export function showPagination(){
  let todos = getTodosFromSStorage();
  if (todos.length > 4){
    paginationBtns.style.display = "flex";
  } 
}

function addTodo(event) {
  event.preventDefault();
  saveTodoToSStorage(todoInput.value);
  renderTodosFromSStorage();
  showPagination();
  pageNumbers();
  clearTodoInput(todoInputWrapper);
}
