import { useEffect, useState } from "react";
import { fetchMoviesReviews } from "../../services/Api";
import { useParams } from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const MovieReviews = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();
  console.log(data);

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const data = await fetchMoviesReviews(controller.signal, movieId);
        setData(data.results);
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
        <Reviews data={data} />
      ) : (
        <h3>We don't have any reviews for this movie.</h3>
      )}
    </div>
  );
};

export default MovieReviews;
