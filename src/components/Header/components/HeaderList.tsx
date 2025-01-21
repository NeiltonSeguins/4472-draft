import { ReactNode } from "react";
import styles from "../Header.module.css";

type HeaderListProps = {
  children: ReactNode;
};

const HeaderList = ({ children }: HeaderListProps) => {
  return <ul className={styles.cabecalho}>{children}</ul>;
};

export default HeaderList;
