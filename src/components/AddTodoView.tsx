import React, { useState } from "react";
import AddTodoViewProps from "../contracts/AddTodoViewProps";
import Todo from "../contracts/Todo";

const AddTodoView = ({createTodo}: AddTodoViewProps) => {

    const [todo, setTodo] = useState<Todo>({id: "", task: "", completed: false})

    const handleFormSubmit = (e: any) => {
        e.preventDefault()
        createTodo(todo)
        setTodo({...todo, task: ""})
    }

    return (
        <div className="bg-white text-black rounded drop-shadow-md p-3 mx-3">
            <form action="" method="POST" className='flex w-full w-max-sm items-center' onSubmit={handleFormSubmit}>
                <input 
                    onChange={(e) => {setTodo({...todo, task: e.target.value})}}
                    className="w-full focus:outline-none" 
                    type="text" 
                    placeholder="Add task here ..."
                    value={todo.task} />
                <button type="submit" className="text-white bg-green-600 border border-green-600 hover:bg-green-800 rounded p-2">Add</button>
            </form>
        </div>
    )
}

export default AddTodoView;