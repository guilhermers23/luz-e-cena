import * as S from "../Header.styled";

const HeaderListItem = ({ children }: React.HTMLAttributes<HTMLUListElement>) => (
    <S.MenuItem>{children}</S.MenuItem>
);

export default HeaderListItem;
