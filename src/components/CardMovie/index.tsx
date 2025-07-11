import { IMovie } from "../interfaces/IMovies";
import Tag from "../Tag";
import * as S from "./CardMovie.styled";


const CardMovie = ({ src, alt, titulo, categoria, faixaEtaria, duracao, genero }: IMovie) => {
    return (
        <S.Card>
            <img src={src} alt={alt} />
            <S.Container>
                <h3>{titulo}</h3>
                <S.Informacoes>
                    <S.SectionCard>
                        <p>{genero}</p>
                        <Tag value={categoria} />
                    </S.SectionCard>
                    <S.SectionCard>
                        <p>{duracao}</p>
                        <Tag value={faixaEtaria} />
                    </S.SectionCard>
                </S.Informacoes>
            </S.Container>
        </S.Card>
    )
};

export default CardMovie;
