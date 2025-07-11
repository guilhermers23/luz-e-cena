import { FaSearch } from "react-icons/fa";
import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import MoviesList from "../MoviesList";
import UseFetchMovies from "../../hooks/useFetchMovies";
import * as S from "./MovieSection";

const MovieSection = () => {
    const { movies, loading, erro } = UseFetchMovies();

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
