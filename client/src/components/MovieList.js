import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/action/actions";
import MovieCard from "./MovieCard";
const MovieList = () => {
  const movies = useSelector((state) => state.movies);
  console.log(movies)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
