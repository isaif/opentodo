import { Todo } from "../utils/interfaces";

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.name}</p>
      ))}
    </ul>
  );
};

export default TodoList;
