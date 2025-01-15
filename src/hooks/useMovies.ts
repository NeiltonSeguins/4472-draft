import { useEffect, useState } from "react";
import { Movie, UseMoviesReturn } from "../types";
import { getMovies } from "../api/api";

export const useMovies = (): UseMoviesReturn => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const movies = await getMovies();
      setMovies(movies);
      setFilteredMovies(movies);
    } catch (error) {
      setError("Erro ao buscar filmes. Tente novamente.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    const filtered = movies.filter((movie) =>
      movie.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    movies,
    filteredMovies,
    searchTerm,
    isLoading,
    error,
    setSearchTerm,
    handleSearch,
  };
};
