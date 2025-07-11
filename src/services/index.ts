import axios from "axios";
import { IMovie } from "../components/interfaces/IMovies";

const BASE_URL = "http://localhost:3001";

export const getMovies = async (): Promise<IMovie[]> => {
    const response = await axios.get<IMovie[]>(`${BASE_URL}/movies`);
    return response.data;
};
