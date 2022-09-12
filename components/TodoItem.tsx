import { Todo } from "../utils/interfaces";

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  return <li>{todo.name}</li>;
};
