import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { API_URL } from "../reusables/urls";

const Details = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    const response = await fetch(`${API_URL}movie/${id}?api_key=${API_KEY}`);
    const movie = await response.json();
    setMovieDetails(movie);
  };

  console.log(movieDetails);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
        alt={movieDetails.original_title}
        className='background_image'
      />
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.original_title}
        className='poster_image'
      />

      <h2>{movieDetails.original_title}</h2>
      <p>{movieDetails.vote_average}</p>
      <p>{movieDetails.overview}</p>
    </div>
  );
};

export default Details;
