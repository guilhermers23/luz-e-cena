import CardMovie from "../CardMovie";
import { IMovie } from "../../interfaces/IMovies";
import * as S from "./MoviesList.styled";

type PropsMovies = { listMovies: IMovie[] };

const MoviesList = ({ listMovies }: PropsMovies) => (

    <S.Lista>
        {listMovies.map(filme => (
            <CardMovie key={filme.id} {...filme} />
        ))}
    </S.Lista>
);

export default MoviesList;
