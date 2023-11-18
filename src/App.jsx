import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {

  const [todos, SetTodos] = useState(() => {
    const localvalue = localStorage.getItem('ITEMS');
    return (localvalue === null)? []: JSON.parse(localvalue);
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id, done)
  {
    SetTodos(currenttodos => {
      return currenttodos.map(todo => {
          if(todo.id === id){
            return {...todo, done}
          }
          return todo;
        })
    })
  }

  function deleteTodo(id)
  {
    SetTodos(currenttodos => {
      return currenttodos.filter(x=> x.id !== id);
    })
  }

  function addToDo(todolabel)
  {
      SetTodos( currenttodo => {
        return [...currenttodo, 
          {id: crypto.randomUUID(), title: todolabel, done: false }
        ]
      });
  }

  return (<>
  <NewTodoForm addToDoProp={addToDo}/>
  <h1 className="header">Todo List</h1>
  <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>)
}