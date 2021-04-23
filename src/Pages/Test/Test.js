import React, { useState, useEffect } from 'react'

export default function Test() {

    const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=373d3f9efafc9c232c465582f0a8610b";
    const getPopularMovies = () => fetch(popularURL).then(res => res.json());

    const [popularMovies, setPopularMovies] = useState();

    useEffect(() => {
        getPopularMovies()
            .then(data => {
                setPopularMovies(data.results)
            });
    }, []);

    return (
        <div>
            {popularMovies && popularMovies.map(movie => {
                return (
                    <>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.original_title}
                            style={{ width: "300px", height: "400px", backgroundColor: 'red' }}>
                        </img>
                        <p>{movie.original_title}</p>
                    </>
                )
            })
            }
        </div>
    )
}




