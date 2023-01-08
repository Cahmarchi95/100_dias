import "./App.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "IncrementAndshowText":
      return { count: state.count + 1, showText: !state.showText };
      case "reset":
        return {count:0, showText:true}
    default:
      return "This action doesn't exist";
  }
};

function FrontBeginnersApp() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  // const [count, setCount] = useState(0)
  // const [showText, setShowText] = useState(true)

  const handleClick = () => {
    dispatch({ type: "IncrementAndshowText" });
  };

  return (
    <div className="App">
      <h1>Front Beginners</h1>
      <h3>{state.count}</h3>
      <button onClick={handleClick}>Clique</button>
      <button onClick={()=>{dispatch({ type: "reset" });}}>Reset</button>
      {state.showText && <p>Bem-vindo ao melhor canal de font-end</p>}
    </div>
  );
}

export default FrontBeginnersApp;
