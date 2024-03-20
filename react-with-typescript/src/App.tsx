import React,{useState} from 'react';
import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';
import {Todo} from "../src/todo-model"

const App: React.FC = () => {
  const [todos,setTodos ]= useState<Todo[]>([]);

  const getInputTodo = (text: string) => {
    //console.log('my todo.....', text);
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);

  };

  const deleteTodoItem = (todoId:string)=>{
   setTodos(prevTdod=>{
    return prevTdod.filter(todo=>todo.id !== todoId )
   })
  }

  return (
    <div className="App">
      <InputTodo getInputTodovalue={getInputTodo} />
      <TodoList items={todos} deleteTodo={deleteTodoItem} />
    </div>
  );
};

export default App;
