import React from "react";
import styles from "./Tag.module.css";
import { Categoria, Censura } from "../../types";

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
