import { TodoItem } from "./TodoItem";

export function TodoList({todos, toggleTodo, deleteTodo})
{
    return (
        <>
        <ul className="list">
            {todos.length === 0 && "No Todos"} {/* short circuit */}
            {todos.map(todo => {
            return (
                // <TodoItem id={todo.id} title={todo.title} done={todo.done} key={todo.id}/>
                <TodoItem {...todo} key={todo.id}
                toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            )
            })}
        </ul>
        </>
    );
}