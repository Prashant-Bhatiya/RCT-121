import React, { useState, useEffect } from "react";
import styles from "./Timer.module.css";

function Stopwatch() {
  const [minutes, setMinutes] = useState(0);
  const [second, setSecond] = useState(0);
  const [milisecond, setMilsecond] = useState(0);
  const [stop, setStop] = useState(false);

  var timer;

  useEffect(() => {
    if (stop === true) {
      if (second === 59) {
        setMinutes(minutes + 1);
        setSecond(0);
      }
      if (milisecond === 100) {
        setSecond(second + 1);
        setMilsecond(0);
      }
      timer = setInterval(() => {
        setMilsecond(milisecond + 1);
      }, 10);

      return () => {
        clearInterval(timer);
      };
    }
  });

  const handleRestart = () => {
    clearInterval(timer);
    setMilsecond(0)
    setSecond(0)
    setStop(false)
  };

  const handleStop = (e) => {
// /    console.log(e.target.innerText)
    {
      e.target.innerText === "Stop" ? clearInterval(timer) : null;
    }
    setStop(!stop);
  };

  return (
    <div className={styles.Timer}>
      <div className={styles.container}>
        <div className={styles.TimerContainer}>
          <h1>Stopwatch</h1>
          <h1>
            {second < 10 ? "0" + second : second}{"s"}
            {" : "}
            {milisecond < 10 ? "0" + milisecond : milisecond}
          </h1>
          <button className={styles.Restart} onClick={handleRestart} >Reset</button>
          <button className={styles.Stop} onClick={handleStop}>{stop ? "Stop" : "Start"}</button>
        </div>
      </div>
    </div>
  );
}
export default Stopwatch;
