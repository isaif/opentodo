import { useState } from "react";

interface Props {
  onFormSubmit: (todo: string) => void;
  submitButtonName: string;
  label?: string;
  inputValue?: string;
  styles: any;
}

interface FormElements extends HTMLFormControlsCollection {
  todo: HTMLInputElement;
}

interface TodoFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const TodoForm = ({
  onFormSubmit,
  submitButtonName,
  label,
  styles,
  inputValue,
}: Props) => {
  const [value, setValue] = useState(inputValue || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const todoValue = e.currentTarget.value;
    setValue(todoValue);
  };

  const handleSubmit = (e: React.FormEvent<TodoFormElement>) => {
    e.preventDefault();
    onFormSubmit(value);
    setValue("");
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      {label && <label htmlFor="todo">{label}</label>}
      <input
        name="todo"
        type="text"
        value={value}
        onChange={handleChange}
        required
      />
      <button type="submit">{submitButtonName}</button>
    </form>
  );
};

export default TodoForm;
