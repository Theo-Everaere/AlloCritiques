import React, { useContext } from 'react';
import { GlobalContext } from "../../Context/GlobalState";
import MovieCard from "../../Components/4.MovieCard/MovieCard";

const Watched = () => {
    const { watched } = useContext(GlobalContext)
    return (
        <>
            <div className="wishlist-container">
                <div className="wishlist-title">
                    <h1>FILMS VUS</h1>
                    <p>
                        {watched.length}{watched.length === 1 ? ' Film' : " Films"}
                    </p>
                </div>
            </div>
            {watched.length > 0 ? (
                <div className="wishlist-movie-card">
                    {watched.map(movie => (<MovieCard movie={movie} type="watched" />))};
                </div>
            ) : (
                <h2 className="wishlist-no-movies">La liste est vide, ajoutez des films!</h2>
            )}
        </>
    );
};

export default Watched;