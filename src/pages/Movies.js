import React, { useState, useEffect } from "react";

import { API_URL } from "../reusables/urls";

import Movie from "../components/Movie";

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(`${API_URL}movie/popular?api_key=${API_KEY}`);
    const movies = await response.json();
    setMovieList(movies.results);
  };

  return (
    <main>
      <div className='container'>
        {movieList.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </main>
  );
};

export default Movies;
