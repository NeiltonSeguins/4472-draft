import React from "react";
import styles from "./FieldSet.module.css";

type FieldSetdProps = {
  variant?: "primary" | "secondary";
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

const FieldSet: React.FC<FieldSetdProps> = ({
  variant = "primary",
  children,
}) => {
  return (
    <fieldset
      className={`${styles.inputWrapper} ${
        variant === "primary" ? styles.primary : styles.secondary
      }`}
    >
      {children}
    </fieldset>
  );
};

export default FieldSet;
