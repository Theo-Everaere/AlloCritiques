import "./Critics.css";
import React from 'react';
import InfosMovies from './InfosMovies/InfosMovies';
import AddCritic from './AddCritic/AddCritic';
import PositiveReviews from './Reviews/PositiveReviews';
import NegativeReviews from './Reviews/NegativeReviews';


function Critics() {
    return (
        <div className="criticsPage">
            <InfosMovies />
            <AddCritic />
            <div className="boxReviews">
                <PositiveReviews />
                <NegativeReviews />
            </div>
        </div>
    )
};

export default Critics;



