import { todoSelect } from './index.js';

export function toggleDisableSelect(){
    let todoItems = document.querySelectorAll(".todo-item");
    if (todoItems.length === 0) {
      return todoSelect.disabled = true;
     } else {
      return todoSelect.disabled = false;
    }
}