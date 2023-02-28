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
import { Routes, Route } from "react-router-dom";
//import NotFound from "./Components/NotFound";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { NavLink } from "react-router-dom";
import Test from "./Components/Test";
import ProuctDetails from "./Components/ProductDetails";
const NotFound=React.lazy(()=>import('./Components/NotFound'));


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
    <div>
      <NavBar/>
    <div className="app">

    <Routes>
        <Route path="/Parent">
          <Route index element={<Products />}></Route>
          <Route path=":name" element={<ProuctDetails />}></Route>
        </Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

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
    </div>
  );
}

export default App;