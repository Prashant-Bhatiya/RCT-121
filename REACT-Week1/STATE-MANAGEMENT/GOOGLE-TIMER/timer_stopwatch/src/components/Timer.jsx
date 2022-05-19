import React, { useState, useEffect } from "react";
import styles from "./Timer.module.css";

function Timer() {
  const [inputtext, setInputtext] = useState(1);
  const [second, setSecond] = useState(0);
  const [minutes, setMinutes] = useState(inputtext);
  const [stop, setStop] = useState(true);

  var timer;

  useEffect(() => {
    if (stop === true) {
      timer = setInterval(() => {
        setSecond(second - 1);

        if (second === 0) {
          setSecond(59);
          setMinutes(minutes - 1);
        }
        if (second === 0 && minutes === 0) {
          setSecond(0);
          setMinutes(0);
          alert("Your Timer is Completed!")
          alert("It will again Start From 59 Seconds!")
          alert("If you want to Modify Enter Minutes and Click On Start Button!")
          setSecond(59);
          setMinutes(minutes - 1);
        }

        if (minutes === 0) {
          setMinutes(0);
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  });

  const handleRestart = () => {
    setSecond(0);
    setMinutes(inputtext);
  };

  const handleStop = (e) => {
    {
      e.target.innerText === "Stop" ? clearInterval(timer) : null;
    }
    setStop(!stop);
  };

  const handleInput = (e) => {
    setInputtext(+e.target.value);
  };

  const handleStart = (e) => {
    setMinutes(inputtext);
    setSecond(0);
  };

  return (
    <div className={styles.Timer}>
      <div className={styles.container}>
        <div className={styles.TimerContainer}>
          <h1>Timer</h1>
          <div className={styles.InputDiv}>
            <input
              onChange={handleInput}
              type="text"
              className={styles.Input}
              placeholder="Enter Only Minutes"
            ></input>
            <button onClick={handleStart} className={styles.Start}>
              Start
            </button>
          </div>
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
