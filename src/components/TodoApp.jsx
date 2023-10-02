import { useState } from "react"
import {ViewTodos} from './TodoListItem'
import { handleTodoAdd } from "./AddTodos";

export const TodoApp = () => {
      
    // Lógica para almacenar los todos
    const [todos,setTodos] = useState([]);
    const [newTodo,setNewTodo] = useState('');
    const handleTodoChange = (event)=>{
      setNewTodo(event.target.value);
    }

    // Lógica para añadir un todo
    const handeTodoAdd = (event) => {
      if (event.key === "Enter") {
        handleTodoAdd(todos, newTodo, setTodos, setNewTodo);
      }
    };
    return (
      <div className="card">
        {/* Header */}
        <div className="">
          <div className="col-12 ">
            <h1>TodoApp</h1>
          </div>
        </div>
  
        {/* TodoFilter */}
        <div className="row mb-3" >
          <div className="col d-flex gap-1">
            <button className="btn btn-sm btn-primary">All</button>
            <button className="btn btn-sm btn-success">Active</button>
            <button className="btn btn-sm btn-danger">Completed</button>
            <button className="btn btn-sm btn-warning">Clear Completed</button>
          </div>
        </div>
  
        {/* TodoAdd */}
        <div className="row mb-3">
          <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0 ">
            <h3>New Todo</h3>
            <input
              type="text"
              className="form-control"
              placeholder="Add Todo"
              // Evento cuando cambia el valor del input
              onChange={handleTodoChange}
              // Evento cuando presiona tecla Enter en ASCII
              onKeyDown={handeTodoAdd}
            />
          </div>
  
          {/* TodoList */}
          <div className="col-sm-12 col-md-8">
            <h3>Todo List</h3>
            <ul className="list-unstyled">
              <ViewTodos todos={todos} />
            </ul>
          </div>
        </div>
      </div>
    )
  }
  