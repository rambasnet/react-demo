import React from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

function Todo(props) {
  let text = props.todo.text;
  if (props.todo.isDone) {
    text = <s style={{color: "red"}}>{text}</s>;
    //console.log(text);
  }

  return (
    <li key={props.key} onClick={() => props.updateTodo(props.index)}>{text}</li>
  )
}

function Todos() {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  function addTodos() {
    let newtodos = [...todos, {text:todo, isDone:false}]
    setTodos(newtodos);
    setTodo("");
  }

  function updateTodo(index) {
    let new_todos = [...todos];
    new_todos[index].isDone = true;
    setTodos(new_todos);
  }

  return (
    <>
      <h2>My Todos</h2>
      <ul>
        {
          todos.map((todo, index) => <Todo key={index} index={index} todo={todo} updateTodo={updateTodo} />)
        }
      </ul>
      <TextField id="todo_text" label="New Todo:" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <Button variant="contained" onClick={addTodos} >Add</Button>
    </>
  )
}

export default Todos;