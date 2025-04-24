import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMoviesName } from "../../services/api";
import toast from "react-hot-toast";
import s from "./MoviesPage.module.css";
import { ScaleLoader } from "react-spinners";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMoviesName(controller.signal, query);

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
  }, [query]);

  const dataMovie = (query) => {
    if (query === "") {
      toast("Please enter a search query.", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });

      return;
    }

    searchParams.set("query", query);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <SearchBar dataMovie={dataMovie} />
      {isLoading ? (
        <div className={s.loader}>
          <ScaleLoader color="blue" />
        </div>
      ) : (
        <MovieList data={data} />
      )}
    </div>
  );
};

export default MoviesPage;
