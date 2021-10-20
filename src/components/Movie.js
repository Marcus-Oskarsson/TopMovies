import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <Link className='movie-card'>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div className='movie-card-text-container'>
        <h2>{movie.original_title}</h2>
        <p>
          Released
          <time> {movie.release_date}</time>
        </p>
      </div>
    </Link>
  );
};

export default Movie;
