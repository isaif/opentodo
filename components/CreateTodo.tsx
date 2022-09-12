import { Todo } from "../utils/interfaces";

interface Props {
  onFormSubmit: (todo: Todo) => void;
}

interface FormElements extends HTMLFormControlsCollection {
  todo: HTMLInputElement;
}

interface TodoFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const CreateTodo = ({ onFormSubmit }: Props) => {
  const handleSubmit = (e: React.FormEvent<TodoFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const todoValue = form.elements.todo.value;

    const newTodo: Todo = {
      id: Math.floor(Math.random() * 100),
      name: todoValue,
      completed: false,
    };

    onFormSubmit(newTodo);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="todo" type="text" placeholder="Add your todo" required />
      <button type="submit">Add</button>
    </form>
  );
};

export default CreateTodo;
