import { FaSearch } from "react-icons/fa";
import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import MoviesList from "../MoviesList";
import * as S from "./MovieSection";
import { IMovie } from "../interfaces/IMovies";
import data from "../../db/dataMovies.json";

const movies = data as IMovie[];

const MovieSection = () => {
    return (
        <main>
            <S.Container>
                <Fieldset variant="secondary">
                    <InputText type="text" placeholder="Pesquisar filmes..." />
                    <Button variant="icon">
                        <FaSearch />
                    </Button>
                </Fieldset>
                <S.Titulo>Em Cartaz</S.Titulo>
                <MoviesList listMovies={movies} />
            </S.Container>
        </main>
    )
};

export default MovieSection;
