import * as S from "./MenuList.styled";

const MenuList = ({ children }: React.HTMLAttributes<HTMLUListElement>) => (
    <nav>
        <S.Navegacao>{children}</S.Navegacao>
    </nav>
);

export default MenuList;
