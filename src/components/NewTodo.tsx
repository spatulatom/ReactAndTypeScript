import React, { useContext, useState, ReactEventHandler } from 'react';

import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
const [todo, setTodo] = useState<string>("")

const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>
{
 return  setTodo(e.target.value);
};


const todosCtx = useContext(TodosContext);
const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

  

    // something I missing here, the check for the value entered
    // is only here so it means that the possobility of it being zero
    // which basucally is nul exist up to this pointso it must have passed 
    // the code above where exclamation mark prevents the value from being
    // null, 
    // unless that prevents empty spaceces which tehnicalyy are not null
    // and what acually prevents that value from being null is the <form>
    // itself 

    if (todo.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(todo);
    setTodo("")
    
    
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      {/* <form className={classes.form}> */}
            <label htmlFor='text'>Todo React & TypeScript</label>
      <input type='text' id='text' value={todo} onChange={handleChange} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
