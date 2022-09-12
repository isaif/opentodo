import { Todo } from "../utils/interfaces";

import styles from "../styles/CreateTodo.module.css";

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
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <label htmlFor="todo">Enter task</label>
      <input name="todo" type="text" required />
      <button type="submit">Add</button>
    </form>
  );
};

export default CreateTodo;
