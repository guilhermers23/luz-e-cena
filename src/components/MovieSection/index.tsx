import { FaSearch } from "react-icons/fa";
import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import MoviesList from "../MoviesList";
import UseFetchMovies from "../../hooks/useFetchMovies";
import useFilterMovies from "../../hooks/useFilterMovies";
import * as S from "./MovieSection";

const MovieSection = () => {
    const { movies, loading, erro } = UseFetchMovies();
    const { term, setTerm, changeSearch, filteredMovies } = useFilterMovies(movies);

    return (
        <main>
            <S.Container>
                <Fieldset variant="secondary">
                    <InputText type="text" placeholder="Pesquisar filmes..."
                        value={term} onChange={event => setTerm(event.target.value)} />
                    <Button variant="icon" onClick={changeSearch}>
                        <FaSearch />
                    </Button>
                </Fieldset>
                <S.Titulo>Em Cartaz</S.Titulo>
                {loading ? <p>Carregando...</p> : erro ? <p>{erro}</p> : (
                    <MoviesList listMovies={filteredMovies} />
                )}
            </S.Container>
        </main>
    )
};

export default MovieSection;
