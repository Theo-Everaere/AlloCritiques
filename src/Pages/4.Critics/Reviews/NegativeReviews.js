import React, { Component } from "react";
import "./Reviews.css";
import iconOpenSection from "../../../Assets/Icons/icon_openSectionComments.svg";
import icon_ProfileCommented_Girl from "../../../Assets/Icons/icon_ProfileCommented_Girl.svg";
import StarRating from "../../../Components/9.StarRating/StarRating";
import LikeDislikeButtons from "../../../Components/8.LikeDislikeButtons/LikeDislikeButtons"
import { DATAS } from "../../../Constantes/MOCKDATA";
import { LABELS } from "../../../Constantes/LABELS";

class NegativeReviews extends Component {
    render() {
        return (
            <div className="positiveReviewsBox">
                <div className="header_Commentsection">
                    <img src={iconOpenSection} alt="icon open comments section" />
                    <h3>{DATAS.BAD_CRITICS}</h3>
                </div>

                <div className="profil_Commentsection">
                    <div className="profile_details">
                        <img src={icon_ProfileCommented_Girl} alt="user profile avatar" />
                        <span>
                            <p>{LABELS.NAME}</p>
                            <StarRating />
                        </span>
                    </div>
                    <p className="CommentSection_Comment">
                        {DATAS.CRITICS}
                    </p>
                    <LikeDislikeButtons />
                </div>

            </div>
        );
    }
}

export default NegativeReviews;
