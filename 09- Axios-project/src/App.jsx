import pokemonInstance from "./helper/axios-instance";
import { useEffect, useState } from "react";
import "./App.css";
import useAxios from "./hook/use-axios";

function App() {
const [pokemonList, loading, error] = useAxios({
  axiosInstance: pokemonInstance,
  method: "GET",
  url:"pokemon",
 
});

console.log(pokemonList, loading, error);

if(loading){
  return <div>Loading...</div>
}

if (error) {
  return <div>{`something went wrong`}</div>;
}

  return (
    <div className="App">
      Front Beginners
      <div>
        {pokemonList.results.map((pokemon,index) => (
          <div key={index}>{pokemon.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
