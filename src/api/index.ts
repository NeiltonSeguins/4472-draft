import axios from "axios";
import { Movie } from "../types";

const API_BASE_URL = "http://localhost:3001";

export const getMovies = async (): Promise<Movie[]> => {
  const response = await axios.get<Movie[]>(`${API_BASE_URL}/movies`);
  return response.data;
};
