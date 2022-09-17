import Todo from "./Todo";

export default interface TodoListViewProps {
    todos: Todo[],
    updateTodo: (todo: Todo) => void,
    deleteTodo: (item: string) => void
}