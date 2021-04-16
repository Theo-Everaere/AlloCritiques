import React, { Component } from "react";
import "./InfosMovies.css";
import Favorite_On from "../../../Assets/Logos/Favorite_Coeur_On.svg";
import Favorite_Off from "../../../Assets/Logos/Favorite_Coeur_Off.svg";
import { DATAS } from "../../../Constantes/MOCKDATA";

class InfosMovies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addWhishlist: true,
        };
    }

    handleWhishlist = () => {
        this.setState({
            addWhishlist: !this.state.addWhishlist,
        });
    };

    render() {
        let bouttonWhishlist;
        if (this.state.addWhishlist) {
            bouttonWhishlist = (
                <button>
                    <img
                        onMouseEnter={this.setHover}
                        src={Favorite_Off}
                        onClick={this.handleWhishlist}
                        alt="icon favoris"
                    />
                    <p className="wishlist-text">{DATAS.ADD_WISHLIST}</p>
                </button>
            );
        } else {
            bouttonWhishlist = (
                <button>
                    <img
                        onMouseEnter={this.setHover}
                        onClick={this.handleWhishlist}
                        src={Favorite_On}
                        alt="icon favoris"
                    />
                    <p className="wishlist-text">{DATAS.IN_WISHLIST}</p>
                </button>
            );
        }
        // return MovieList.map((el, i) => {
        return (
            <div key={"i"} className="Infos">
                {/* <img src={"el.poster"} alt="Poster Film" /> */}
                <img src="https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/83/93/95/19803697.jpg" alt="Poster Film" />
                <div className="Info_Container">
                    <h2 className="Infos_Titre">
                        <span>{"el.title"}</span>
                    </h2>
                    <div className="Infos_Film">
                        <div>
                            <span className="span_infoMovie">{"MOVIES.RELEASED"}</span>
                            {"el.released"}
                            <br />
                            <span className="span_infoMovie">{"MOVIES.RUNTIME"}</span>
                            {"el.runtime"} {"MOVIES.MIN"}
                            <br />
                            <span className="span_infoMovie">{"MOVIES.GENRE"}</span>
                            {"el.genre"}
                            <br />
                            <span className="span_infoMovie">{"MOVIES.DIRECTOR"}</span>
                            {"el.director"}
                            <br />
                            <span className="span_infoMovie">{"MOVIES.ACTORS"}</span>
                            {"el.actors"}
                        </div>
                        <div className="bouton_favoris">{"bouttonWhishlist"}</div>
                    </div>

                    <p className="Synopsis">
                        <span className="span_infoMovie">{"MOVIES.SYNOPSIS"}</span>
                        {"el.plot"}
                    </p>
                </div>
            </div>
        );
        // });
    }
}

export default InfosMovies;
