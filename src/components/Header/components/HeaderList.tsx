import * as S from "./../Header.styled";

const HeaderList = ({ children }: React.HTMLAttributes<HTMLUListElement>) => (
    <S.Cabecalho>{children}</S.Cabecalho>
);

export default HeaderList;
