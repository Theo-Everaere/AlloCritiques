import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import MovieCard from '../../Components/4.MovieCard/MovieCard';
import "./Wishlist-Watchlist.css"

const Watchlist = () => {
    const { watchlist } = useContext(GlobalContext);
    return (
        <>
            <div className="wishlist-container">
                <div className="wishlist-title">
                    <h1>MA LISTE</h1>
                    <p>
                        {watchlist.length}{watchlist.length === 1 ? ' Film' : " Films"}
                    </p>
                </div>
            </div>
            {watchlist.length > 0 ? (
                <div className="wishlist-movie-card">
                    {watchlist.map(movie => (<MovieCard movie={movie} type="watchlist" />))};
                </div>
            ) : (
                <h2 className="wishlist-no-movies">La liste est vide, ajoutez des films!</h2>
            )}
        </>
    );
};

export default Watchlist;