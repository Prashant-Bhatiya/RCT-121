import { useContext } from "react";
import "./App.css";
import AppContextProvider, { AppContext } from "./Contexts/AppContextProvider";
import Button from "./components/Button";

function App() {
  const {setTheme} = useContext(AppContext);
  return (
    <AppContextProvider>
      <div className="App">
        <h1>Learning Context API</h1>
        <Button text="Theme" />
        <button onClick={setTheme} >Change Theme</button>
      </div>
    </AppContextProvider>
  );
}

export default App;
