import { StyledButton, Button2 } from "./components/button.style";
import { Wrapper } from "./components/Wrapper.style";

function App() {
  return (
    <Wrapper>
      <StyledButton backgroundColor="blue">Front Beginners</StyledButton>
      <StyledButton backgroundColor="red">Front Beginners</StyledButton>
      <Button2>Front Beginners</Button2>
      <a href="#">Clique aqui</a>
    </Wrapper>
  );
}

export default App;
