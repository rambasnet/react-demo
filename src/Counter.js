import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);
  const updateCounter = () => {
    let c = count+1;
    setCount(c);
  }
  return (
    <>
      <label style={{fontSize: 20}}>Click Count: {count}</label>&nbsp;
      <button onClick={updateCounter}>Click</button>
    </>
  )
}

export default Counter;