import { useState, useEffect, useRef } from "react";
import "./App.css";

//useRef:
//- guardar referência de valores
//- acessar elementos DOM ou do React

function App() {
  const [count, setCount] = useState(0);
  const [textInput, setTextInput] = useState("");
  const [data, setData] = useState([]);
  const countRef = useRef(0);

  const timeToCallSomething = useRef(null);

  const fetchSomething = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${textInput}`)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  };

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  //Nesse caso, o useEffect vai funcionar fazendo com que demore 1 segundo para fazer a requisição dos dados para a API. Sem isso, cada vez que o usuário digitasse uma letra no input seria feita uma nova requisição para a API (pq ia alterar o useState), o que é muito custoso para uma aplicação.

  useEffect(() => {
    if (timeToCallSomething.current) {
      clearInterval(timeToCallSomething.current);
    }
    timeToCallSomething.current = setTimeout(fetchSomething, 1000);

    return () => clearInterval(timeToCallSomething.current);
  }, [textInput]);

  return (
    <div className="App">
      <h1>Front Beginners</h1>
      <div className="card">
        <p>Contador Original: {count}</p>
        <p>Contador Referência: {countRef.current}</p>
        <form>
          <input
            name="name"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
