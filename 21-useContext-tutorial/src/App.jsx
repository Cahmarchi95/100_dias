import AppProvider from "./context/AppProvider";
import ChildrenOne from "./components/Children-one"
import ChildrenTwo from "./components/Children-two";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <ChildrenOne />
      <ChildrenTwo />
    </AppProvider>
  );
}

export default App;
