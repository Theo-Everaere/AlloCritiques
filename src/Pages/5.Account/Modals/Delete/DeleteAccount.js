import React from 'react'
import "./DeleteAccount.css"


function ModalDelete() {

    return (
        <div className="modal-account">

            <div className="modal-content">

                <div className="form-contact">
                    <input type="password" placeholder="Entrez le mot de passe pour valider" />
                    <button className="sent-modal-contact">Supprimer le compte</button>
                </div>
                <button
                    className="close-modal-password"
                >Fermer
                </button>
            </div>

        </div>
    )

}
export default ModalDelete;


<div className="modal-account">

    <div className="modal-content">

        <div className="form-contact">
            <input type="password" placeholder="Mot de Passe" />
            <button className="sent-modal-contact">Supprimer</button>
        </div>
        <button
            className="close-modal-password"
        >Fermer
                </button>
    </div>

</div>



