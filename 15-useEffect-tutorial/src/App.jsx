import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [countB, setCountB] = useState(0);
  const [data, setData] = useState("");

  // Executa sempre
  // useEffect(() => {
  //   console.log("executa sempre");
  // });

  //Executa ao iniciar
  // useEffect(() => {
  //   console.log("executa na 1ª vez que a página carrega");
  // }, []);

  // Executa sempre que um estado específico é alterado
  // useEffect(() => {
  //   console.log("executa sempre que um estado específico é alterado");
  // }, [count]);

  // Clean up

  // useEffect(() => {
  //   const timer = setTimeout(()=>{
  //     console.log(`O count foi executado ${count}`);
  //   },1000)

  //   return()=>{
  //     clearTimeout(timer)
  //   }

  // }, [count]);

  //Caso real (fazer o fetch utilizando useEffect para não ficar em looping infinito)

  useEffect(() => {
    fetch("https://api.github.com/users/Cahmarchi95")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if(!data){
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <h1>Front Beginners</h1>
      <h3>Name: {data.name}</h3>
      <div className="card">
        <p>Foi renderizado {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Render</button>
      </div>
      <div className="card">
        <p>Foi renderizado {countB}</p>
        <button onClick={() => setCountB((count) => count + 1)}>RenderB</button>
      </div>
    </div>
  );
}

export default App;
