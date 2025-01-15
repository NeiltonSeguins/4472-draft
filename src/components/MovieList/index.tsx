import CardMovie from "../CardMovie";
import styles from "./MovieList.module.css";

export type Categoria = "2D" | "3D";

export type Censura = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

export interface Movie {
  src: string;
  alt: string;
  titulo: string;
  categoria: Categoria;
  censura: Censura;
  genero: string;
  duracao: number;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={styles.lista}>
      {movies.map((movie, index) => (
        <CardMovie key={index} {...movie} />
      ))}
    </ul>
  );
};

export default MovieList;
