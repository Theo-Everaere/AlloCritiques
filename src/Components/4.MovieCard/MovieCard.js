import React from 'react';
import MovieControls from "../5.MovieControls/MovieControls";
import "./MovieCard.css";

const MovieCard = ({ movie, type }) => {
    return (
        <div className="movie-card">
            {movie.poster_path ? (
                <img src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
            ) : (
                null
            )}

            <MovieControls type={type} movie={movie} />
        </div>
    );
}

export default MovieCard;