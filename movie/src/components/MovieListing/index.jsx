import React, { useEffect } from "react";
import MovieCard from "../MovieCard";
import "./MovieListing.scss";
import { useSelector } from "react-redux";

const MovieListing = () => {
  const { movies, shows } = useSelector((state) => state.movie);

  useEffect(() => {
    setTimeout(() => {
      console.log(movies);
    }, 1000);
  }, []);

  let renderMovies = "";
  let renderShows = "";

  renderMovies =
    movies?.Response === "True" ? (
      movies?.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="movies-error">
        <h3>{movies?.Error}</h3>
      </div>
    );

  renderShows =
    shows?.Response === "True" ? (
      shows?.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="movies-error">
        <h3>{shows?.Error}</h3>
      </div>
    );

  return (
    <div>
      <div className="movie-wapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">{renderMovies}</div>
          <div className="show-list">
            <h2>Series</h2>
            <div className="movie-container">{renderShows}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
