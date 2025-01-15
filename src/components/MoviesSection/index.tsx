import { useEffect, useState } from "react";
import FieldSet from "../FieldSet";
import styles from "./MovieSection.module.css";
import MovieList from "../MovieList";
import { Movie } from "../../types";
import InputText from "../InputText";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import { getMovies } from "../../api/api";

const MoviesSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const movies = await getMovies();
      setMovies(movies);
      setFilteredMovies(movies);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = () => {
    const filtered = movies.filter((movie) =>
      movie.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <main>
      <section className={styles.container}>
        <FieldSet>
          <InputText
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
            placeholder="Buscar filmes..."
          />
          <Button variant="icon" onClick={handleSearch}>
            <FaSearch />
          </Button>
        </FieldSet>
        <h1 className={styles.titulo}>Em cartaz</h1>
        <MovieList movies={filteredMovies} />
      </section>
    </main>
  );
};

export default MoviesSection;
