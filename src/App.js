import React from 'react';

function App() {
  const sayHello = () => {
    console.log("hello");
  }

  const counter = 0;

  const clickMe = () => {
    counter = counter + 1;
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={clickMe}>{counter}</button>
    </div>
  ); 
}

export default App; 

