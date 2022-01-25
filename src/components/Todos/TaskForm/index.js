import {useState, useEffect} from 'react'

const defaultTodo = {task:"", isActive: true, view: true}

function TaskForm({todos, updateTodos}) {

    const [todo, setTodo] = useState(defaultTodo)

    useEffect(() => {  
        setTodo(defaultTodo)
    },[todos])

    const inputChange = (e) => {
        setTodo({...todo, task: e.target.value})
    }

    const addTodo = (e) => {
        e.preventDefault();
        updateTodos([...todos, todo])
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={addTodo}>
                <input className="new-todo" value={todo.task} onChange={inputChange} placeholder="What needs to be done?" autoFocus/>
            </form>
        </header>
    )
}

export default TaskForm
