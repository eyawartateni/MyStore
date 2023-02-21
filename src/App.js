import React, { useState } from "react";
import Tweet from "./Tweet";
import './App.css'
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import Product from "./Components/Product";
import Products from "./Components/Products";


function App() {
  /*const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState(
    [
      { name: "eya", message: "hello there" },
      { name: "warta", message: "hello there" }

    ]
  );

  const increment = () => {
    setCount(count + 1);
    setRed(true);
  }*/

  return (
    <div className="app">
      <Products />
   {/*<Counter></Counter>
      <Greet name="eyo" />
      <Welcome name="eyo" />
      <Hello />
      <Message />
      <h1 className={isRed ? "red" : ""}>Change my color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>


      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
*/}

    </div>
  );
}

export default App;