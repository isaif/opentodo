import { Todo } from "../utils/interfaces";

import styles from "../styles/TodoItem.module.css";
import { useState } from "react";
import TodoForm from "./TodoForm";

interface Props {
  todo: Todo;
  handleCheckBox: (id: number) => void;
  handleDelete: (id: number) => void;
  handleEdit: (id: number, value: string) => void;
}

export const TodoItem = ({
  todo,
  handleCheckBox,
  handleDelete,
  handleEdit,
}: Props) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const onEditComplete = (value: string) => {
    handleEdit(todo.id, value);
    setShowEditForm(!showEditForm);
  };

  const defaultView = (
    <>
      <input
        type="checkbox"
        checked={todo.completed}
        className={styles.checkbox}
        onChange={() => handleCheckBox(todo.id)}
      />
      <span>{todo.name}</span>
      <button onClick={() => setShowEditForm(!showEditForm)}>Edit</button>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </>
  );

  const editingView = (
    <TodoForm
      onFormSubmit={onEditComplete}
      submitButtonName="Done"
      styles={styles}
      inputValue={todo.name}
    />
  );

  const view = showEditForm ? editingView : defaultView;

  return <li className={styles.todoItem}>{view}</li>;
};
