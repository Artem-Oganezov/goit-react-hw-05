import axios from "axios";

export const fetchMovies = async (signal) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjMyYzZkOTQ2OTVkYzI4N2ZkZGQwMDhhOTc3ODA3YiIsIm5iZiI6MTc0NTEwMDI3MC4zNjYwMDAyLCJzdWIiOiI2ODA0MWRlZWU1MDZhOGUzYTBhZDk1ZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LKPpn7Ez0khM2Eg0DXUQagqg33QfCEIQdI_FY2d5j0c",
      },
      signal: signal,
    }
  );
  return response.data;
};

export const fetchMoviesName = async (signal, query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjMyYzZkOTQ2OTVkYzI4N2ZkZGQwMDhhOTc3ODA3YiIsIm5iZiI6MTc0NTEwMDI3MC4zNjYwMDAyLCJzdWIiOiI2ODA0MWRlZWU1MDZhOGUzYTBhZDk1ZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LKPpn7Ez0khM2Eg0DXUQagqg33QfCEIQdI_FY2d5j0c",
      },
      params: {
        query: `${query}`,
        include_adult: false,
        page: 1,
      },
      signal: signal,
    }
  );
  return response.data;
};

export const fetchMoviesDetails = async (signal, movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjMyYzZkOTQ2OTVkYzI4N2ZkZGQwMDhhOTc3ODA3YiIsIm5iZiI6MTc0NTEwMDI3MC4zNjYwMDAyLCJzdWIiOiI2ODA0MWRlZWU1MDZhOGUzYTBhZDk1ZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LKPpn7Ez0khM2Eg0DXUQagqg33QfCEIQdI_FY2d5j0c",
      },
      signal: signal,
    }
  );
  return response.data;
};

export const fetchMoviesCast = async (signal, movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjMyYzZkOTQ2OTVkYzI4N2ZkZGQwMDhhOTc3ODA3YiIsIm5iZiI6MTc0NTEwMDI3MC4zNjYwMDAyLCJzdWIiOiI2ODA0MWRlZWU1MDZhOGUzYTBhZDk1ZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LKPpn7Ez0khM2Eg0DXUQagqg33QfCEIQdI_FY2d5j0c",
      },
      signal: signal,
    }
  );
  return response.data;
};

export const fetchMoviesReviews = async (signal, movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjMyYzZkOTQ2OTVkYzI4N2ZkZGQwMDhhOTc3ODA3YiIsIm5iZiI6MTc0NTEwMDI3MC4zNjYwMDAyLCJzdWIiOiI2ODA0MWRlZWU1MDZhOGUzYTBhZDk1ZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LKPpn7Ez0khM2Eg0DXUQagqg33QfCEIQdI_FY2d5j0c",
      },
      signal: signal,
    }
  );
  return response.data;
};
