import * as S from "./Tag.styled";

export type Categoria = "2D" | "3D";
export type FaixaEtaria = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos" | "18 anos";
export interface PropsTag { value: Categoria | FaixaEtaria };

const Tag = ({ value }: PropsTag) => {
    return (
        <S.Tag value={value}>{value}</S.Tag>
    )
};

export default Tag;
