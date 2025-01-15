import { useState } from "react";
import FieldSet from "../FieldSet";
import styles from "./MovieSection.module.css";
import MovieList from "../MovieList";
import { Movie } from "../../types";
import InputText from "../InputText";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";

const movies: Movie[] = [
  
];

const MoviesSection = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);

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
