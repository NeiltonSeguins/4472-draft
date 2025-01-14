import React from "react";
import styles from "./SelectGroup.module.css";

interface SelectGroupProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode;
}

const SelectGroup: React.FC<SelectGroupProps> = ({
  icon,
  children,
  ...props
}) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.icone}>{icon}</div>}
      <select className={styles.selector} {...props}>
        {children}
      </select>
    </div>
  );
};

export default SelectGroup;
