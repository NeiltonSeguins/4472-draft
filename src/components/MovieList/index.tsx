import { Movie } from "../../types";
import CardMovie from "../CardMovie";
import styles from "./MovieList.module.css";

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
