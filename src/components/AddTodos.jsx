export const handleTodoAdd = (todos, newTodo, setTodos, setNewTodo) => {
    if (newTodo.trim() === "") {
      return; // Evita agregar una tarea vacía
    }
  
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };
  