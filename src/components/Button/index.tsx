import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

type BotaoProps = {
  variant?: "primary" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Botao: React.FC<BotaoProps> = ({
  variant = "primary",
  children,
  ...rest
}) => {
  
  const classMap = {
    primary: styles.primary,
    icon: styles.icon,
  };

  return (
    <button className={classNames(styles.botao, classMap[variant])} {...rest}>
      {children}
    </button>
  );
};

export default Botao;
