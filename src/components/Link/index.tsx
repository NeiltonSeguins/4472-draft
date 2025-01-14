import React from "react";
import styles from "./Link.module.css";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, ...rest }: LinkProps) => {
  return (
    <a className={styles.link} {...rest}>
      {children}
    </a>
  );
};

export default Link;
