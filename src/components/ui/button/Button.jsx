import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const clickHandler = () => {
    props.onClick && props.onClick();
  };
  return (
    <button
      onClick={clickHandler}
      className={`${styles.btn} ${props.disabled ? styles.disabled : ""}`}
      type="submit"
    >
      {props.children}
    </button>
  );
};

export default Button;
