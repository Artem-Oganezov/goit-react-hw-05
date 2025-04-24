import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../services/api";
import { ScaleLoader } from "react-spinners";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovies(controller.signal);

        setData(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <div>
        {isLoading ? (
          <div className={s.loader}>
            <ScaleLoader color="blue" />
          </div>
        ) : (
          <MovieList data={data} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
