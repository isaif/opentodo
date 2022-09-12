import { Todo } from "../utils/interfaces";
import { TodoItem } from "./TodoItem";

import styles from "../styles/TodoList.module.css";

interface Props {
  todos: Todo[];
}

const TodoList = ({ todos }: Props) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
