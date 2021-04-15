import React, { Fragment, useContext } from 'react';
import { GlobalContext } from "../../Context/GlobalState";
import "./MovieControls.css"

const MovieControls = ({ movie, type }) => {
    const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched } = useContext(GlobalContext);
    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <Fragment>
                    <div className="tooltip_bottom">
                        <button
                            className="ctrl-btn"
                            onClick={() => addMovieToWatched(movie)}
                        >
                            <>
                                <i className="fa-fw fa fa-eye" />
                                <span className="tooltiptext">Je l'ai vu !</span>
                            </>
                        </button>
                    </div>

                    <button
                        className="ctrl-btn"
                        onClick={() => removeMovieFromWatchlist(movie.id)}
                    >
                        <>
                            <i className="fa-fw fa fa-times" />
                            <span className="tooltiptext">Supprimer</span>
                        </>
                    </button>
                </Fragment>
            )}

            {type === 'watched' && (
                <Fragment>
                    <button
                        className="ctrl-btn"
                        onClick={() => moveToWatchlist(movie)}
                    >
                        <div className="tooptip">
                            <i class="fa-fw fa fas fa-plus-circle"></i>
                            <span className="tooltiptext">Ajouter à ma liste</span>
                        </div>
                    </button>

                    <button className="ctrl-btn"
                        onClick={() => removeFromWatched(movie.id)}
                    >
                        <div className="tooptip">
                            <i className="fa-fw fa fa-times" />
                            <span className="tooltiptext">Supprimer</span>
                        </div>
                    </button>
                </Fragment>
            )}
        </div>

    );
}

export default MovieControls;