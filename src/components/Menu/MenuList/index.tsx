import styles from "./MenuList.module.css";

type MenuListProps = React.HTMLAttributes<HTMLUListElement>;

const MenuList = ({ children }: MenuListProps) => {
  return (
    <nav>
      <ul className={styles.navegacao}>{children}</ul>
    </nav>
  );
};

export default MenuList;
