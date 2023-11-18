import { useState } from "react"

export function NewTodoForm(props)
{
    const [newItem, SetNewItem] = useState("")

    function handleSubmit(e)
    {
      e.preventDefault();
    //   SetTodos( currenttodo => {
    //     return [...currenttodo, 
    //       {id: crypto.randomUUID(), title: newItem, done: false }
    //     ]
    //   });
      if(newItem === "") return;
      props.addToDoProp(newItem); //Destructing is only use { addToDoProp } in newtodoform argument instead of props
      SetNewItem("")
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">new item</label>
                <input value={newItem} onChange={e => SetNewItem(e.target.value)} type="text" id="item"/>
            </div>
            <button className="btn">Add</button>
        </form>
        </>
    )
}