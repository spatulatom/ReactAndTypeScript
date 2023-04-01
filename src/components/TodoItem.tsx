import classes from './TodoItem.module.css';

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
  onRemoveTodo: () => void;
};

export default function TodoItem({ text, onRemoveTodo }: TodoItemProps) {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>
      {text}
    </li>
  );
}
