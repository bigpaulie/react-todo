import React from "react";
import Todo from "../contracts/Todo";
import TodoListViewProps from "../contracts/TodoListViewProps";

const TodoListView = ({todos, updateTodo, deleteTodo}: TodoListViewProps) => {

    const handleDeleteButton = (e: any) => {
        let item: string = e.target.getAttribute("data-todo")
        deleteTodo(item)
    }

    const handleCheckBox = (e: any) => {
        let todo: Todo = {...JSON.parse(e.target.getAttribute("data-todo")), completed: e.target.checked}
        updateTodo(todo)
    }

    return (
        <div className="flex flex-col p-4">
            {todos && todos.map(todo => {
                return (
                    <div className="flex items-center justify-between my-2" key={todo.id}>
                        <input 
                        className="mr-3"
                            data-todo={JSON.stringify(todo)}
                            type="checkbox" 
                            checked={todo.completed}
                            onChange={handleCheckBox} />
                        <div className={ todo.completed ? 'line-through' : ''}>{todo.task}</div>
                        <button 
                            data-todo={todo.id}
                            className="ml-3 border border-red-800 bg-red-800 rounded hover:bg-red-700 p-1 grow-0"
                            onClick={handleDeleteButton}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoListView;