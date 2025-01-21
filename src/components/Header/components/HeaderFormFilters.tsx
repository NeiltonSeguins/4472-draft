import { FaLocationDot } from "react-icons/fa6";
import SelectGroup from "../../Selector/SelectGroup";
import SelectOption from "../../Selector/SelectOption";

const cidades = [
  { id: 1, nome: "São Paulo" },
  { id: 2, nome: "Rio de Janeiro" },
  { id: 3, nome: "Belo Horizonte" },
  { id: 4, nome: "Curitiba" },
  { id: 5, nome: "Porto Alegre" },
];

const HeaderFormFilters = () => {
  return (
    <form>
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
    </form>
  );
};

export default HeaderFormFilters;
