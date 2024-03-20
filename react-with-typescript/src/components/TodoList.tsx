
import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[]; // Change id type to string
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {

  return (
    <>
      {props.items.map((todo) => {
        return <li key={todo.id}>{todo.text} <button onClick={props.deleteTodo.bind(null,todo.id)}>DELETE</button></li>;
      })}
    </>
  );
};

export default TodoList;
