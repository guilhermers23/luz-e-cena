import CardMovie from "../CardMovie";
import { IMovie } from "../interfaces/IMovies";
import * as S from "./MoviesList.styled";

type PropsMovies = { movies: IMovie[] };

const MoviesList = ({ movies }: PropsMovies) => {
    <S.Lista>
        {movies.map(filme => (
            <CardMovie key={filme.id} {...filme} />
        ))}
    </S.Lista>
};

export default MoviesList;
