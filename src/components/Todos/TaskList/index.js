function TaskList({todos, updateTodos}) {

    const getButtonStyle = (todo) => {
        return todo.isActive === true ? "view" : "completed" 
    }

    const onChange = (e) => {
        const new_todos = todos.map(todo=>todo.task === e.target.id ? {...todo, isActive: !e.target.checked} : todo)
        updateTodos(new_todos)
    }

    const deleteTask = (e) => {
        const new_todos = todos.filter(todo=>todo.task !== e.target.id)
        updateTodos(new_todos)
    }

    // const checkAll = (e) => {
    //     const checked_todos = todos.map(todo => todo.isActive === !e.target.checked ? {...todo, isActive: !e.target.checked} : todo )
    //     updateTodos(checked_todos)
    // }

    return (
        <section className="main">
            <input className="toggle-all" type="checkbox"/>
		        <label htmlFor="toggle-all" >
			        Mark all as complete
		        </label>

            <ul className="todo-list">
                {
                todos.filter(todo=>todo.view === true)
                .map((todo)=> 
                    <li className={getButtonStyle(todo)} key={todo.task}>
                        <div className="view">
                            <input className="toggle" type="checkbox" onChange={onChange} id={todo.task} checked={todo.isActive === true ? false : true}/>
                            <label htmlFor={todo.task}>{todo.task}</label>
                            <button className="destroy" onClick={deleteTask} id={todo.task}></button>
                        </div>        
                    </li>          
                    )
                }
            </ul>
        </section>
    )
}

export default TaskList
