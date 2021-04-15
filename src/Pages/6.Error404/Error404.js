import React, { Component } from 'react'
import './Error404.css'
import gif from './Error404.gif'
import { Link } from 'react-router-dom'
import { DATAS } from '../../Constantes/MOCKDATA'

class Error404 extends Component {
    render() {
        return (
            <div className='Erreur404-body'>
                <div className="Erreur404-container">

                    <div className="Erreur404-text">
                        <h1 className="Erreur404-text_h1">ERREUR 404 !</h1>
                        <h3 className="Erreur404-text_h3">La page que vous recherchez n'existe pas.</h3>
                        <h4 className="Erreur404-text_h4">Cliquez ici pour revenir à l'accueil.</h4>
                        <Link to='/' className="Erreur404-bouton">{DATAS.ACCUEIL}</Link>
                    </div>
                        <img className='TestGif' src={gif} alt='Gif' />
                </div>

            </div>
        )
    }
}

export default Error404;
