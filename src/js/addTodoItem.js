import { removeTodoFromSStorage } from "./sessionStorage";
import { pageNumbers} from "./pagination";
export const getTodoItem = (text) => {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  const todoText = document.createElement("span");
  todoText.innerText = text;
  todoText.classList.add("todo-text");
  todoItem.appendChild(todoText);

  const removeButton = document.createElement("button");
  removeButton.innerHTML = '<i class="fas fa-trash"></i>';
  removeButton.classList.add("todo-remove-button");
  removeButton.addEventListener("click", removeTodoItem(todoItem));
  todoItem.appendChild(removeButton);

  return todoItem;
};

function removeTodoItem(todoItem) {
  return (e) => {
    e.preventDefault();
    todoItem.classList.add("todo-item_fall");
    todoItem.addEventListener("transitionend", function () {
      removeTodoFromSStorage(todoItem);
      todoItem.remove();
      pageNumbers();
    });
  };
}
