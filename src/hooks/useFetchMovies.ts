import { useEffect, useState } from "react";
import { IMovie } from "../interfaces/IMovies";
import { getMovies } from "../services";

const UseFetchMovies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [erro, setErro] = useState<string | null>(null);

    const fetchMovies = async () => {
        setLoading(true);
        setErro(null);
        try {
            const res = await getMovies();
            setMovies(res);
        } catch (error) {
            setErro("Ocorreu um erro ao buscar os filmes");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => { fetchMovies() }, []);

    return { movies, loading, erro };
};

export default UseFetchMovies;
