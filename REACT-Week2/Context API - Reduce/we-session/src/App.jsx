import { useContext } from "react";
import "./App.css";
import AppContextProvider, { AppContext } from "./Contexts/AppContextProvider";
import Button from "./components/Button";

function App() {

  const [theme, setTheme] = useContext(AppContext );
  return (
    <AppContextProvider>
      <div className="App">
        <h1>Learning Context API</h1>
        <Button text="Theme" />
        <button>Change Theme</button>
      </div>
    </AppContextProvider>
  );
}

export default App;
