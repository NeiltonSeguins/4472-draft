import React from "react";
import styles from "./Tag.module.css";

export type Categoria = "2D" | "3D";

export type Censura = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

interface TagProps {
  value: Categoria | Censura;
}

const tagClasses = {
  Livre: styles.livre,
  "10 anos": styles.dez,
  "12 anos": styles.doze,
  "14 anos": styles.catorze,
  "16 anos": styles.dezesseis,
  "2D": styles.doisD,
  "3D": styles.tresD,
};

const Tag: React.FC<TagProps> = ({ value }) => {
  return <span className={`${styles.tag} ${tagClasses[value]}`}>{value}</span>;
};

export default Tag;
