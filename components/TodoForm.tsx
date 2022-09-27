interface Props {
  onFormSubmit: (todo: string) => void;
  submitButtonName: string;
  label?: string;
  styles: any;
}

interface FormElements extends HTMLFormControlsCollection {
  todo: HTMLInputElement;
}

interface TodoFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const TodoForm = ({ onFormSubmit, submitButtonName, label, styles }: Props) => {
  const handleSubmit = (e: React.FormEvent<TodoFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const todoValue = form.elements.todo.value;

    onFormSubmit(todoValue);
    form.reset();
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      {label && <label htmlFor="todo">{label}</label>}
      <input name="todo" type="text" required />
      <button type="submit">{submitButtonName}</button>
    </form>
  );
};

export default TodoForm;
