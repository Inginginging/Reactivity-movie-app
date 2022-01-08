import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, coverImg, summary, genres, year }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={coverImg} alt={title} />
      {summary ? <p>{summary}</p> : null}
      {genres ? ( //장르가 있나 확인 후 있으면 추가.
        <ul>
          {genres.map((gen) => (
            <li key={gen}>{gen}</li>
          ))}
        </ul>
      ) : null}
      <small>{year}</small>
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
