import React, { useState, useEffect } from 'react';

import { API_URL } from '../reusables/urls';

import Movie from '../components/Movie';

const Movies = ({ searchText }) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movieList, setMovieList] = useState([]);

    const fetchMovies = async () => {
        const response = await fetch(
            `${API_URL}movie/popular?api_key=${API_KEY}`
        );
        const movies = await response.json();
        setMovieList(movies.results);
    };

    const fetchFiltered = async () => {
        const response = await fetch(
            `${API_URL}search/movie?api_key=${API_KEY}&query=${searchText}`
        );
        const movies = await response.json();
        setMovieList(movies.results);
    };

    useEffect(() => {
        if (searchText) {
            fetchFiltered();
        } else {
            fetchMovies();
        }
    }, [searchText]);

    return (
        <main>
            {movieList.map((movie) => (
                <Movie movie={movie} key={movie.id} />
            ))}
        </main>
    );
};

export default Movies;
