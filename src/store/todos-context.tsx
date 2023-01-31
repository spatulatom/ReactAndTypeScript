import React, { useState } from 'react';

import Todo from '../models/todo';
// type TodosContextObj = {} equal sign with type aliases
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

// we eksporting TodoContext, why? apparently we need that for  use context later
export const TodosContext= React.createContext({} as TodosContextObj)
  // this is just pure JS her yet decribing function is somewhat new
  // like why there is nothing there in curly brackets
//   items: [],
//   addTodo: (text:string) => {},
//   removeTodo: (id: string) => {},
// });

const TodosContextProvider: React.FC = (props) => {
  // we only have props.children and they default and therfore
  // no need to define them here: React.FC<no need>
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

 export default TodosContextProvider;