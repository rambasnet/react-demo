import React from 'react';
import Button from '@mui/material/Button';

function Counter() {
  const [count, setCount] = React.useState(0);
  const updateCounter = () => {
    let c = count+1;
    setCount(c);
  }
  return (
    <>
      <label style={{fontSize: 20}}>Click Count: {count}</label>&nbsp;
      <Button variant="contained" color="success" onClick={updateCounter} size="small">Click</Button>
    </>
  )
}

export default Counter;