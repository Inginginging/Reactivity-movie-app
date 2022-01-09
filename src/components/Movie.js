import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, title, coverImg, summary, genres, year }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <small className={styles.movie__year}>{year}</small>
        {summary ? (
          <p>
            {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
          </p>
        ) : null}
        {genres ? ( //장르가 있나 확인 후 있으면 추가.
          <ul className={styles.movie__genres}>
            {genres.map((gen) => (
              <li key={gen}>{gen}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

Movie.prototype = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;
