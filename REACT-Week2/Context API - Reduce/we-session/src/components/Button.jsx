import React, { useContext } from "react";
import { AppContext } from "../Contexts/AppContextProvider";
import styles from "./button.module.css";

function Button({ text }) {
  const [state] = useContext(AppContext);

  return (
    <button
      className={`${styles.buttonBase} ${
        state === "Light" ? styles.buttonLight : styles.buttonDark
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
