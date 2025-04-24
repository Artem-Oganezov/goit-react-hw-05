import { Link, useLocation } from "react-router-dom";

const MovieList = ({ data }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link state={location} to={`/movies/${item.id}`}>
              {item.title || item.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
