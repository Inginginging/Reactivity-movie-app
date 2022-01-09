import PropTypes from "prop-types";
import styles from "./DetailMovie.module.css";

function DetailMovie({ title, coverImg, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img className={styles.movie__img} src={coverImg} alt={title} />
      <div>
        <h2 className={styles.movie__title}>{title}</h2>
        {summary ? (
          <p className={styles.movie__summary}>{summary}</p>
        ) : (
          <p>Can't summary the movie...</p>
        )}
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

DetailMovie.prototype = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailMovie;
