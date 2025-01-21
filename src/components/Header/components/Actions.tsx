import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import Button from "../../Button";

const Actions = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button variant="icon">
        <HiOutlineShoppingCart />
      </Button>
      <Button variant="icon">
        <HiOutlineUser />
      </Button>
    </div>
  );
};

export default Actions;
