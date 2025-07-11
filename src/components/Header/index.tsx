import HeaderFormFilters from "./components/HeaderFormFilters";
import HeaderListItem from "./components/HeaderListItem";
import HeaderActions from "./components/HeaderActions";
import HeaderLinks from "./components/HeaderLinks";
import HeaderList from "./components/HeaderList";
import Logo from "../Logo";

const Header = () => (
    <header>
        <HeaderList>
            <HeaderListItem>
                <Logo src="/logos/Logo.png" />
            </HeaderListItem>
            <HeaderListItem>
                <HeaderLinks />
            </HeaderListItem>
            <HeaderListItem>
                <HeaderFormFilters />
            </HeaderListItem>
            <HeaderListItem>
                <HeaderActions />
            </HeaderListItem>
        </HeaderList>
    </header>
);

export default Header;
