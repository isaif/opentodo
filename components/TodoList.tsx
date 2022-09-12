import { Todo } from "../utils/interfaces";
import { TodoItem } from "./TodoItem";

interface Props {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
