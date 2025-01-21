import FieldSet from "../FieldSet";
import styles from "./MovieSection.module.css";
import MovieList from "../MovieList";
import InputText from "../InputText";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { useFilterMovies } from "../../hooks/useFilteredMovies";

const MoviesSection = () => {
  const { movies, isLoading, error } = useFetchMovies();
  const { searchTerm, setSearchTerm, filteredMovies, handleSearch } =
    useFilterMovies(movies);

  return (
    <main>
      <section className={styles.container}>
        <FieldSet variant="secondary">
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
        {isLoading && <p>Carregando filmes...</p>}
        {error && <p className={styles.error}>{error}</p>}
        <MovieList movies={filteredMovies} />
      </section>
    </main>
  );
};

export default MoviesSection;
