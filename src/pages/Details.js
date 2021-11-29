import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { API_URL } from '../reusables/urls';

import BackButton from '../components/BackButton';

const Details = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  const fetchMovieDetails = async () => {
    const response = await fetch(
      `${API_URL}movie/${id}?api_key=${API_KEY}`,
    );
    const movie = await response.json();
    setMovieDetails(movie);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  return (
    <div className="details_background">
      <BackButton />
      <img
        src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
        alt={movieDetails.original_title}
        className="background_image"
      />
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.original_title}
        className="poster_image"
      />
      <div className="details_text_wrapper">
        <h2>{movieDetails.original_title}</h2>
        <p>
          Average rating:
          {' '}
          <span className="details_average_rating">
            {movieDetails.vote_average}
          </span>
        </p>
        <p>{movieDetails.overview}</p>
      </div>
    </div>
  );
};

export default Details;
