import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const { name, type, other, label, ref } = props.data;

  const changeHandler = (event) => {
    const value = event.target.value;
    console.log("Clicked");
    props.data.onChange && props.data.onChange(value);
  };
  return (
    <div>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        onChange={changeHandler}
        ref={ref}
        id={name}
        type={type}
        className={styles.input}
        placeholder={name}
        {...other}
        required
      />
    </div>
  );
};

export default Input;
