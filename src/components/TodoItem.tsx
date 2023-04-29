import classes from './TodoItem.module.css';
import { TodosContext } from '../store/todos-context';
import React, { useContext } from 'react';

// const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
//   props
// ) => {
//   return (
//     <li className={classes.item} onClick={props.onRemoveTodo}>
//       {props.text}
//     </li>
//   );
// };

// export default TodoItem;

type TodoItemProps = {
  text: string;
  itemId: string;
};

export default function TodoItem({ text, itemId }: TodoItemProps) {
  const todosCtx = useContext(TodosContext);
  const removeTodo = ()=> {
    todosCtx.removeTodo(itemId)
  }

  return (
    <li className={classes.item} onClick={removeTodo}>
      {text}
    </li>
  );
}
