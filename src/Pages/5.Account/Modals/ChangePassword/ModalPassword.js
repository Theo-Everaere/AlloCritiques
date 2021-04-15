import React, { useState } from 'react'
import "./ModalPassword.css"


function ModalPassword(props) {

    return (
        <div className="modal-account">

            <div className="modal-content">
                <div className="form-contact">
                    <input type="password" placeholder="Ancien mot de passe" />
                    <input type="password" placeholder="Nouveau mot de passe" />
                    <input type="password" placeholder="Confirmer le mot de passe" />
                    <button className="sent-modal-contact">Valider</button>
                </div>
                <button
                    className="close-modal-password"
                >Fermer</button>
            </div>
        </div>
    )

}
export default ModalPassword;



