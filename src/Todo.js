import React from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

function Todo(props) {
  let name = props.todo.name;
  if (props.todo.isDone) {
    name = <s style={{color: "red"}}>{name}</s>;
    //console.log(name);
  }

  return (
    <li key={props.key} onClick={() => props.updateTodo(props.index)}>{name}</li>
  )
}

function Todos() {
  const [todos, setTodos] = React.useState([]);

  function addTodos() {
    let newtodos = [...todos, {name:document.getElementById('todo_text').value, isDone:false}]
    setTodos(newtodos);
  }

  function updateTodo(index) {
    
  }

  return (
    <>
      <h2>My Todos</h2>
      <ul>
        {
          todos.map((todo, index) => <Todo key={index} index={index} todo={todo} updateTodo={updateTodo} />)
        }
      </ul>
      <TextField id="todo_text" label="New Todo:" />
      <Button variant="contained" onClick={addTodos} >Add</Button>
    </>
  )
}

export default Todos;