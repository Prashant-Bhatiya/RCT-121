import React, { useState, useEffect } from "react";
import styles from "./Timer.module.css";

function Timer() {
  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [stop, setStop] = useState(true);

  var timer;

  useEffect(() => {
    if (stop === true) {
      timer = setInterval(() => {
        setSecond(second + 1);

        if (second === 59) {
          setMinutes(minutes + 1);
          setSecond(0);
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  });

  const handleRestart = () => {
    setSecond(0);
    setMinutes(0);
  };
  const handleStop = (e) => {
    {
      e.target.innerText === "Stop" ? clearInterval(timer) : null;
    }
    console.log(e.target.innerText);
    console.log(stop);
    setStop(!stop);
  };

  return (
    <div className={styles.Timer}>
      <div className={styles.container}>
        <div className={styles.TimerContainer}>
          <h1>Timer</h1>
          <h1>
            {minutes < 10 ? "0" + minutes : minutes} :{" "}
            {second < 10 ? "0" + second : second}
          </h1>

          <button className={styles.Restart} onClick={handleRestart}>
            Restart
          </button>
          <button className={styles.Stop} onClick={handleStop}>
            {stop ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
