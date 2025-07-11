import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import MoviesList from "../MoviesList";
import { IMovie } from "../interfaces/IMovies";
import { getMovies } from "../../services";
import * as S from "./MovieSection";

const MovieSection = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    const fetchMovies = async () => {
        try {
            const res = await getMovies();
            setMovies(res);
        } catch (error) {
            console.error("Ocorreu um erro ao buscar os filmes", error);
        }
    };

    useEffect(() => { fetchMovies() });

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
