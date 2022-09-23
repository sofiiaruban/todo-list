import {
  getTodosFromSStorage,
  saveCurPageToSStorage,
  getCurPageFromSStorage,
} from "./sessionStorage";
import {
  prevButton,
  nextButton,
  todoList,
  renderTodosFromSStorage,
} from "./main.js";
import { getTodoItem } from "./addTodoItem";

const todos = getTodosFromSStorage();
const clickPageNumber = document.querySelectorAll(".click-page-number");

let currentPage = 1;
let recordsSize = 5;

export function numPages() {
  const todos = getTodosFromSStorage();
  return Math.ceil(todos.length / recordsSize);
}

export function selectedPage() {
  let pageNumber = document.getElementsByClassName("click-page-number");
  currentPage = getCurPageFromSStorage();
  for (let i = 0; i < pageNumber.length; i++) {
    if (i === currentPage - 1) {
      pageNumber[i].style.opacity = "1.0";
    } else {
      pageNumber[i].style.opacity = "0.5";
    }
  }
}

export function checkButtonOpacity() {
  currentPage = getCurPageFromSStorage();
  currentPage === 1
    ? prevButton.classList.add("opacity")
    : prevButton.classList.remove("opacity");
  currentPage === numPages()
    ? nextButton.classList.add("opacity")
    : nextButton.classList.remove("opacity");
}

export function changePage(page) {
  const todos = getTodosFromSStorage();
  let pageContent = todos.slice((page - 1) * recordsSize, page * recordsSize);
  return pageContent;
}

export function renderChangedPage() {
  //currentPage = getCurPageFromSStorage();
  //todoList.innerHTML = "";
  //let todos = changePage(currentPage);
  //todos.forEach((todoValue) => {
  //  const todoItem = getTodoItem(todoValue.todotext);
  //  todoList.appendChild(todoItem);
  //});
  renderTodosFromSStorage();
  checkButtonOpacity();
  selectedPage();
}

export function prevPage() {
  currentPage = getCurPageFromSStorage();
  if (currentPage > 1) {
    currentPage--;
    saveCurPageToSStorage(currentPage);
    renderChangedPage();
  }
}

export function nextPage() {
  currentPage = getCurPageFromSStorage();
  if (currentPage < numPages()) {
    currentPage++;
    saveCurPageToSStorage(currentPage);
    renderChangedPage();
    selectedPage();
  }
}

export function clickPage() {
  document.addEventListener("click", function (e) {
    if (
      e.target.nodeName == "SPAN" &&
      e.target.classList.contains("click-page-number")
    ) {
      currentPage = e.target.textContent;
      saveCurPageToSStorage(currentPage);
      renderChangedPage();
      checkButtonOpacity();
    }
  });
}
export function pageNumbers() {
  let pageNumber = document.getElementById("page-number");
  pageNumber.innerHTML = "";

  for (let i = 1; i < numPages() + 1; i++) {
    pageNumber.innerHTML += "<span class='clickPageNumber'>" + i + "</span>";
  }
}
