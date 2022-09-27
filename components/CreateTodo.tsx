import { Todo } from "../utils/interfaces";
import CreateTodoForm from "./CreateTodoForm";

interface Props {
  onFormSubmit: (todo: Todo) => void;
}

const CreateTodo = ({ onFormSubmit }: Props) => {
  return (
    <CreateTodoForm
      onFormSubmit={onFormSubmit}
      submitButtonName="Add"
      label="add todo"
    />
  );
};

export default CreateTodo;
