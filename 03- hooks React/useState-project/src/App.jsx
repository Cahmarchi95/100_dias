import "./App.css";
import { useState } from "react";

function FrontBeginnersApp() {
  const [count, setCount] = useState(0);

  const [valueInput,setValueInput] = useState("Caroline")

  const add = () => {
    setCount(count + 1);
  };
  const onChangeInput = (event) =>{
    setValueInput(event.target.value)
  }

  return (
    <div className="App">
      <h1>Front Beginners</h1>
      <h3>{count}</h3>
      <button onClick={add}>adicionar</button>
      <div>
        <input onChange={onChangeInput}/>
      </div>
      <h3>{valueInput}</h3>
      </div>
  );
}

export default FrontBeginnersApp;
