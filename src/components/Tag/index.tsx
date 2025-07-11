import { Categoria, FaixaEtaria } from "../interfaces/IMovies";
import * as S from "./Tag.styled";

export interface PropsTag { value: Categoria | FaixaEtaria };

const Tag = ({ value }: PropsTag) => {
    return (
        <S.Tag value={value}>{value}</S.Tag>
    )
};

export default Tag;
