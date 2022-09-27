import { Todo } from "../utils/interfaces";
import CreateTodoForm from "./CreateTodoForm";

import styles from "../styles/CreateTodo.module.css";

interface Props {
  onFormSubmit: (todo: Todo) => void;
}

const CreateTodo = ({ onFormSubmit }: Props) => {
  const CreateTodo = (todoValue: string) => {
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 100),
      name: todoValue,
      completed: false,
    };
    onFormSubmit(newTodo);
  };

  return (
    <CreateTodoForm
      onFormSubmit={CreateTodo}
      submitButtonName="Add"
      label="Enter your task"
      styles={styles}
    />
  );
};

export default CreateTodo;
