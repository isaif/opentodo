import { Todo } from "../utils/interfaces";
import { TodoItem } from "./TodoItem";

import styles from "../styles/TodoList.module.css";

interface Props {
  todos: Todo[];
  handleCheckBox: (id: number) => void;
}

const TodoList = ({ todos, handleCheckBox }: Props) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleCheckBox={handleCheckBox} />
      ))}
    </ul>
  );
};

export default TodoList;
