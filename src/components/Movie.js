import React from 'react';

const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
      <h2>{movie.original_title}</h2>
      <p>
        RELEASE
        <time>
          DATUM PLACEHOLDER<datetime>DATUM ex 2021-01-01</datetime>
        </time>
      </p>
    </div>
  );
};

export default Movie;
