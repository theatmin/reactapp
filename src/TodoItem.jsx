export function TodoItem({id, title, done, toggleTodo, deleteTodo})
{
    return (
        <>
        <li key={id}>
            <label>
                <input type="checkbox" checked={done}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button className="btn btn-danger" 
                    onClick={() => deleteTodo(id)}
                >Delete
            </button>
        </li>
        </>
    );
}