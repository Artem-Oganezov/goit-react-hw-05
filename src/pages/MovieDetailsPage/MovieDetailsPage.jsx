import { useEffect, useRef, useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchMoviesDetails } from "../../services/api";

const MovieDetailsPage = () => {
  const [data, setData] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");
  const navigate = useNavigate();

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const data = await fetchMoviesDetails(controller.signal, movieId);
        setData(data);
        console.log(data);
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
      <button
        onClick={() => {
          navigate(goBackRef.current);
        }}
      >
        Go back
      </button>

      <img
        src={
          data.poster_path
            ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <h1>{data.original_title}</h1>
      <h2>overview</h2>
      {data.overview}
      <hr />
      <h2>genres</h2>
      <ul>
        {data.genres?.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <hr />
      <nav>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
