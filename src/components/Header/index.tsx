import HeaderList from "./components/HeaderList";
import HeaderListItem from "./components/HeaderListItem";
import Logo from "../Logo";
import HeaderLinks from "./components/HeaderLinks";
import HeaderFormFilters from "./components/HeaderFormFilters";
import Actions from "./components/Actions";

const Header = () => {
  return (
    <header>
      <HeaderList>
        <HeaderListItem>
          <Logo src="/logo.png" />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderLinks />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderFormFilters />
        </HeaderListItem>
        <HeaderListItem>
          <Actions />
        </HeaderListItem>
      </HeaderList>
    </header>
  );
};

export default Header;
