import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./Header.module.css";
import SelectGroup from "../Selector/SelectGroup";
import SelectOption from "../Selector/SelectOption";
import Button from "../Button";
import MenuList from "../Menu/MenuList";
import MenuItem from "../Menu/MenuItem";

const cidades = [
  { id: 1, nome: "São Paulo" },
  { id: 2, nome: "Rio de Janeiro" },
  { id: 3, nome: "Belo Horizonte" },
  { id: 4, nome: "Curitiba" },
  { id: 5, nome: "Porto Alegre" },
];

const items = ["Eventos", "Clube fidelidade", "Sobre nós"];

const Header = () => {
  return (
    <header className={styles.cabecalho}>
      <img src="/logo.png" />
      <MenuList>
        {items.map((item, index) => {
          return <MenuItem key={index}>{item}</MenuItem>;
        })}
      </MenuList>
      <SelectGroup id="cidade" icon={<FaLocationDot />}>
        <SelectOption value="" label="Escolha uma cidade" />
        {cidades.map((cidade) => (
          <SelectOption
            key={cidade.id}
            value={cidade.nome}
            label={cidade.nome}
          />
        ))}
      </SelectGroup>
      <div className={styles.icones}>
        <Button variant="icon">
          <HiOutlineShoppingCart />
        </Button>
        <Button variant="icon">
          <HiOutlineUser />
        </Button>
      </div>
    </header>
  );
};

export default Header;
