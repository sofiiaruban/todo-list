import {toggleDisableSelect} from "./toggleDisableSelect";


const TODOS = "todos";

export function removeTodoFromSStorage(todoItem) {
  let todos = getTodosFromSStorage();
  const todoText = Array.from(todoItem.childNodes).find((node) =>
    node.classList.contains("todo-text")
  );

  if (todoText) {
    const filtredTodos = todos.filter((item) => item.todotext !== todoText.innerText);
    sessionStorage.setItem(TODOS, JSON.stringify(filtredTodos));
  }
  toggleDisableSelect();
}

export function saveTodoToSStorage(todo, stat) {
  let todos = getTodosFromSStorage(); 
  let todoElem = {
    todotext: todo,
    status: stat, 
  }
  todos.push(todoElem);
  sessionStorage.setItem(TODOS, JSON.stringify(todos));
}
export function changeStatus(todo) {
  let todos = getTodosFromSStorage();
  for (let i = 0; i  < todos.length; i++) {
    //console.log(todos[i].todotext);
    //console.log(todo.innerText);
    //console.log(todos[i].todotext === todo.innerText);
    if (todos[i].todotext === todo.innerText) {
        if (todos[i].status === "uncompleted") {
            todos[i].status = "completed";
        } else { 
            todos[i].status ="uncompleted";
        }
    }
  }
  sessionStorage.setItem(TODOS, JSON.stringify(todos));
}
export function getTodosFromSStorage() {
  const storageTodos = sessionStorage.getItem(TODOS);
  return storageTodos ? JSON.parse(storageTodos) : [];;
}
// {
//  todotext: getTodosFromSStorage(),
//  status: "uncompleted"
//};