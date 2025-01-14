import Link from "../../Link";

type MenuItemProps = {
  href?: string | "#";
} & React.HTMLAttributes<HTMLLIElement>;

const MenuItem = ({ children, href = "#" }: MenuItemProps) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default MenuItem;
