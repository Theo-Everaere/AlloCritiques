import React, { useState } from 'react'
import { ResultCard } from "../7.ResultCard/ResultCard"
import "./SearchBar.css"

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([])

    const handleChange = e => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=373d3f9efafc9c232c465582f0a8610b&language=fr-FR&page=1&include_adult=false&query=${e.target.value}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            });
    };


    return (

        <div className="add-content">
            <div className="input-wrapper">
                <input
                    className="searchbar-bouton"
                    type="text"
                    placeholder="Recherche"
                    value={query}
                    onChange={handleChange}
                />
            </div>

            {results.length > 0 && (
                <ul className="results-bottom">
                    {results.map((movie) => (
                        <li key={movie.id}>
                            <ResultCard movie={movie} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;