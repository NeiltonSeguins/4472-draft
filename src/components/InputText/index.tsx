import React from "react";
import styles from "./InputText.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputText: React.FC<InputProps> = (props) => {
  return <input className={styles.input} {...props} />;
};

export default InputText;
