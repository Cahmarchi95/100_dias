import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: sans-serif;
`;

export default function HangmanWord() {
  const word = "teste";
  const guessedLetters = ["s" ,"t"];
  return (
    <Wrapper>
      {word.split("").map((letter, index) => (
        <span
          style={{ borderBottom: "0.1em solid black", height: "30px" }}
          key={index}
        >
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </Wrapper>
  );
}
