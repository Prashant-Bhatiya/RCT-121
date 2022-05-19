import "./App.css";
import { useState } from "react";
import Timer from "./components/Timer";
import styles from "../src/components/Timer.module.css";
import Stopwatch from "./components/Stopwatch"

function App() {
  const [newtimer, setNewtimer] = useState(true);

  const handleButtons = (e) => {
    {e.target.innerText === "Timer" ? setNewtimer(true) : setNewtimer(false)}
  };

  return (
    <div className="App mainDiv">
      <button className={styles.Restart} onClick={handleButtons}>
        Timer
      </button>
      <button className={styles.Restart} onClick={handleButtons}>
        StopWatch
      </button>
      {newtimer ? <Timer /> : <Stopwatch/>}
    </div>
  );
}

export default App;
