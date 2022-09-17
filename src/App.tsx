import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTodoView from './components/AddTodoView';
import TodoListView from './components/TodoListView';
import Todo from './contracts/Todo';
import NoTasksAvailableView from './components/NoTasksAvailableView';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/todo").then((response) => {
      setTodos(response.data)
    })
  }, [])

  const createTodo = (todo: Todo) => {
    axios.post("http://localhost:8080/api/v1/todo", JSON.stringify(todo)).then((response) => {
      setTodos([...todos, response.data])
    })
  }

  const updateTodo = (todo: Todo) => {
    const payload = {task: todo.task, completed: todo.completed}
    axios.put(`http://localhost:8080/api/v1/todo/${todo.id}`, payload).then((response) => {
      let item: Todo = response.data
      setTodos(todos.map(todo => {
        if (todo.id === item.id) {
          todo.task = item.task
          todo.completed = item.completed
        }

        return todo
      }))
    })
  }

  const deleteTodo = (item: string) => {
    axios.delete(`http://localhost:8080/api/v1/todo/${item}`).then((response) => {
      setTodos(todos.filter(todo => todo.id !== item))
    })
  }

  return (
    <div className="container mx-auto mt-6">

      <AddTodoView createTodo={createTodo} />
      <hr className="mt-4 text-white mx-3" />
      <div className="flex flex-col p-4">
        {todos && todos.length > 0 ? 
        <TodoListView todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} /> :
        <NoTasksAvailableView />
        }
      </div>

    </div>
  );
}

export default App;
