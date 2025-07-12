import { useEffect, useState } from "react";
import { IMovie } from "../interfaces/IMovies";

const useFilterMovies = (movies: IMovie[]) => {
    const [term, setTerm] = useState<string>("");
    const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]);

    useEffect(() => { setFilteredMovies(movies) }, [movies]);

    const changeSearch = () => {
        const filtered = movies.filter(movie => (
            movie.titulo.toLowerCase().includes(term.toLowerCase())
        ));
        setFilteredMovies(filtered);
    }

    return { term, setTerm, filteredMovies, changeSearch }
};

export default useFilterMovies;
