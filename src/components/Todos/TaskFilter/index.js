function TaskFilter({todos, updateTodos}) {

	const clickAll = () => {
		const all_todos = todos.map(todo=>todo.view === false ? {...todo, view: true} : todo)
		updateTodos(all_todos)
	}

	const clickActive = () => {
		const active_todos = todos.map(todo=>todo.isActive === true ? {...todo, view: true} : {...todo, view: false})
		updateTodos(active_todos)
	}

	const clickCompleted = () => {
		const completed_todos = todos.map(todo=>todo.isActive === false ? {...todo, view: true} : {...todo, view: false})
		updateTodos(completed_todos)
	}

	const clickClearCompleted = () => {
		const cleared_todos = todos.filter(todo=>todo.isActive === true)
		updateTodos(cleared_todos)
	}

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{(todos.filter((todo)=>todo.isActive === true)).length}</strong> item left
            </span>
            <ul className="filters">
			    <li>
                    <a onClick={clickAll}>All</a>
			    </li>
			    <li>
				    <a onClick={clickActive}>Active</a>
			    </li>
			    <li>
				    <a onClick={clickCompleted}>Completed</a>
			    </li>
		    </ul>                 
            <button className="clear-completed" onClick={clickClearCompleted} style={todos.some(todo => todo.isActive === false) ? {visibility:"visible"}: {visibility:"hidden"}}>Clear completed</button>
	    </footer>
    )
}

export default TaskFilter
