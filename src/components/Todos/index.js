import {useState} from 'react'

import TaskForm from './TaskForm'
import TaskList from './TaskList'
import TaskFilter from './TaskFilter'

const defaultTodos = [{task:"play game", isActive: true, view: true}, {task:"ride bike", isActive: true, view: true}, {task:"watch movie", isActive: true, view: true}]
//const defaultTodos = []

function Todos() {

    const [todos, setTodos] = useState(defaultTodos)

    return (
        <div>
            <TaskForm todos={todos} updateTodos={setTodos}/>
            <TaskList todos={todos} updateTodos={setTodos}/>  
            <TaskFilter todos={todos} updateTodos={setTodos}/>    
        </div>
    )
}

export default Todos
