import "./NavBar.css"
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import icon from "./icon_menu.svg"
import home from "./icon_home.svg"
import logo from "../../Assets/Logos/Logo_AlloCritiques.png"


export default function NavBar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [logged, setLogged] = useState(true);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };

    useEffect(() => {

        const changeWidth = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth)
        }
    }, []);

    return (
        <nav className="nav">
            <div className="nav-logo">
                <Link to='/'>
                    <img src={logo} alt='Logo AlloCritiques' />
                    <h1>Allo<span>Critiques</span></h1>
                </Link>
            </div>

            {(toggleMenu || width > 900) && (
                <div className="nav-content">
                    <ul className="list-nav">
                        <Link to="/"><li className="items-nav-home"><img src={home} alt='Logo Accueil' /></li></Link>
                        {logged ? <Link to="/wishlist"><li className="items-nav">Ma Liste</li></Link> : null}
                        {logged ? <Link to="/watchlist"><li className="items-nav">Visionnés</li></Link> : null}
                        {logged ? <Link to="/account"><li className="items-nav">Mon Compte</li></Link> : <Link to="/SignIn"><li className="items-nav">Connexion / Inscription</li></Link>}
                    </ul>
                </div>
            )}
            <button onClick={toggleNav} className="btn-nav">
                <img src={icon} alt="" />
            </button>
        </nav>
    )
}
