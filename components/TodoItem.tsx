import { Todo } from "../utils/interfaces";

import styles from "../styles/TodoItem.module.css";

interface Props {
  todo: Todo;
  handleCheckBox: (id: number) => void;
}

export const TodoItem = ({ todo, handleCheckBox }: Props) => {
  return (
    <li className={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        className={styles.checkbox}
        onChange={() => handleCheckBox(todo.id)}
      />
      <span>{todo.name}</span>
    </li>
  );
};
