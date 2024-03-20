import React,{useRef} from 'react'

interface InputTodoProps {
  getInputTodovalue: (text: string) => void;
}
const InputTodo: React.FC<InputTodoProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleTodoSubmit =(e:React.FormEvent)=>{
    e.preventDefault();
    const enteredText = inputRef.current!.value
    props.getInputTodovalue(enteredText);
    //console.log(enteredText)
  }
  return (
    <form onSubmit={handleTodoSubmit}>
        <label htmlFor="input-todo">Title of todo</label>
        <input type="text" id="input-todo" placeholder="enter your todo here..." ref={inputRef}></input>
        <button type="submit">ADD-TODO</button>
    </form>
  )
}

export default InputTodo
