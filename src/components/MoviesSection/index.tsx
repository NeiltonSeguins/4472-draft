import FieldSet from "../FieldSet";
import styles from "./MovieSection.module.css";
import MovieList from "../MovieList";
import InputText from "../InputText";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import { useMovies } from "../../hooks/useMovies";

const MoviesSection = () => {
  const {
    filteredMovies,
    searchTerm,
    isLoading,
    error,
    setSearchTerm,
    handleSearch,
  } = useMovies();

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
        {isLoading && <p>Carregando filmes...</p>}
        {error && <p className={styles.error}>{error}</p>}
        <MovieList movies={filteredMovies} />
      </section>
    </main>
  );
};

export default MoviesSection;
