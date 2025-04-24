import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCast } from "../../services/Api";
import Cast from "../Cast/Cast";

const MovieCast = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const data = await fetchMoviesCast(controller.signal, movieId);
        setData(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      {data.length > 0 ? (
        <Cast data={data} />
      ) : (
        <h3>We don't have any cast for this movie.</h3>
      )}
    </div>
  );
};

export default MovieCast;
