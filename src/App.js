import React from 'react';

function App() {
  const sayHello = () => {
    console.log("hello");
  }

  const counter = 0;

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={sayHello}>{counter}</button>
    </div>
  ); 
}

export default App;

