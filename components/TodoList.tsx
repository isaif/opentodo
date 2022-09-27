import { Todo } from "../utils/interfaces";
import { TodoItem } from "./TodoItem";

import styles from "../styles/TodoList.module.css";

interface Props {
  todos: Todo[];
  handleCheckBox: (id: number) => void;
  handleDelete: (id: number) => void;
  handleEdit: (id: number, value: string) => void;
}

const TodoList = ({
  todos,
  handleCheckBox,
  handleDelete,
  handleEdit,
}: Props) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCheckBox={handleCheckBox}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
