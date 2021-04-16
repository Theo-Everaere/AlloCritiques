import React, { useContext } from 'react';
import { useHistory } from "react-router-dom"
import { GlobalContext } from "../../Context/GlobalState";
import "./ResultCard.css"
import NoPoster from './No-poster.jpg'

export const ResultCard = ({ movie }) => {
    const { addMovieToWatchlist, watchlist, watched, addMovieToWatched } = useContext(GlobalContext);
    let storedMovie = watchlist.find(object => object.id === movie.id);
    let storedMovieWatched = watched.find((object) => object.id === movie.id);
    const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
    const watchedDisabled = storedMovieWatched ? true : false;

    let history = useHistory();
    const redirect = () => {
        history.push('/Critics')
    }

    return (
        <div className="result-card">
            <div>
                {movie.poster_path ? (
                    <button className='bouton-poster' onClick={redirect}>
                        <img className='search-poster' src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.title} Poster`} />
                    </button>
                ) : (
                    <button className='bouton-poster' onClick={redirect}>
                        <img className='search-poster' src={NoPoster} alt={`${movie.title} Poster`} />
                    </button>
                )}
            </div>

            <button className="info-title" onClick={redirect}>{movie.title}</button>
            <h4 className="release-date">
                {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
            </h4>
            <div className='btn-search'>
                <button
                    className="btn-search-add"
                    onClick={() => addMovieToWatchlist(movie)}
                    disabled={watchlistDisabled}
                >Ajouter à la liste</button>
                <button
                    className="btn-search-add"
                    onClick={() => addMovieToWatched(movie)}
                    disabled={watchedDisabled}
                >Déjà vu</button>
            </div>
        </div>
    );
};
