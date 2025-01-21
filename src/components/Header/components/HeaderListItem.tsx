import { ReactNode } from "react";
import styles from "../Header.module.css";

type HeaderListItemProps = {
  children: ReactNode;
};

const HeaderListItem = ({ children }: HeaderListItemProps) => {
  return <li className={styles.menuitem}>{children}</li>;
};

export default HeaderListItem;
