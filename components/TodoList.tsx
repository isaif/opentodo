import { Todo } from "../utils/interfaces";
import { TodoItem } from "./TodoItem";

import styles from "../styles/TodoList.module.css";

interface Props {
  todos: Todo[];
  handleCheckBox: (id: number) => void;
  handleDelete: (id: number) => void;
}

const TodoList = ({ todos, handleCheckBox, handleDelete }: Props) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCheckBox={handleCheckBox}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
