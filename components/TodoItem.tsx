import { Todo } from "../utils/interfaces";

import styles from "../styles/TodoItem.module.css";

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  return (
    <li className={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        className={styles.checkbox}
      />
      <span>{todo.name}</span>
    </li>
  );
};
