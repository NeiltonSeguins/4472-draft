import Link from "../../Link";

type MenuItemProps = {
  item: string;
  href?: string | "#";
};

const MenuItem = ({ item, href = "#" }: MenuItemProps) => {
  return (
    <li>
      <Link href={href}>{item}</Link>
    </li>
  );
};

export default MenuItem;
