import Todo from "./Todo";

export default interface AddTodoViewProps {
    createTodo: (todo: Todo) => void
}