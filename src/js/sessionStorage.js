
const TODOS = "todos";

export function removeTodoFromSStorage(todoItem) {
  let todos = getTodosFromSStorage();
  const todoText = Array.from(todoItem.childNodes).find((node) =>
    node.classList.contains("todo-text")
  );

  if (todoText) {
    const filtredTodos = todos.filter(
      (item) => item.todotext !== todoText.innerText
    );
    sessionStorage.setItem(TODOS, JSON.stringify(filtredTodos));
  }
}

export function saveTodoToSStorage(todo) {
  let todos = getTodosFromSStorage();
  let todoElem = {
    todotext: todo,
  };
  todos.push(todoElem);
  sessionStorage.setItem(TODOS, JSON.stringify(todos));
}
export function getTodosFromSStorage() {
  const storageTodos = sessionStorage.getItem(TODOS);
  return storageTodos ? JSON.parse(storageTodos) : [];
}

export function saveCurPageToSStorage(page) {
  return sessionStorage.setItem("curpage", JSON.stringify(page));
}
export function getCurPageFromSStorage() {
  return JSON.parse(sessionStorage.getItem("curpage")) || 1;
}
