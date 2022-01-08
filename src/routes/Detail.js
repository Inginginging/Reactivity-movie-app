import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams(); //url 에서 id 가져오기
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = response.json();
    console.log(json);
  };
  useEffect(() => getMovies(), []);
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}
export default Detail;
