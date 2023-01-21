import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const HangmanPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 375px;
`;

const words = [
  "alpaca",
  "anchova",
  "bacalhau",
  "badejo",
  "barracuda",
  "beluga",
  "chinchila",
  "escaravelho",
  "gralha",
  "hamster",
  "lhama",
  "lince",
  "marreco",
  "ouriço",
  "pelicano",
  "percevejo",
  "pirilampo",
  "quati",
  "rouxinol",
  "sanguessuga",
  "surucucu",
  "texugo",
];

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const correctGuesses = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );

  const isLoser = incorrectGuesses.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((guessedLetters) => [...guessedLetters, letter]);
    },
    [guessedLetters, isLoser,isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetters(key);
    };

    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <Wrapper>
      <HangmanPart>
        {isLoser && "Você perdeu, atualize a página para tentar novamente"}
        {isWinner &&
          "Parabéns, você venceu!!! Atualize a página para jogar novamente"}
        <h2>Front Beginners - Jogo da Forca</h2>
        <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
        <HangmanWord
          reveal={isLoser}
          guessedLetters={guessedLetters}
          word={wordToGuess}
        />
      </HangmanPart>
      <Keyboard
        disabled={isLoser || isWinner}
        activeLetters={correctGuesses}
        inactiveLetters={incorrectGuesses}
        addGuessedLetters={addGuessedLetters}
      />
    </Wrapper>
  );
}

export default App;
