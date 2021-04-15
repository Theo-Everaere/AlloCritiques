import React, { useState } from 'react'
import "./Contact.css"

function ContactBtn() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal-contact">Nous Contacter</button>

            {modal && (

                <div className="overlay-contact">

                    <div className="modal-contact">
                        <div className="modal-content">
                            <h2>Hello visiteur !</h2>
                            <p>Un problème ? Une erreur sur notre site ? Une remarque ?</p>
                            <p>Contactez-nous !</p>
                            <div className="form-contact">
                                <textarea className="textArea" cols="30" rows="5" placeholder="Votre message ici..."></textarea>
                                <button className="sent-modal-contact">Envoyez</button>
                            </div>
                            <p>Théo - Imen - Alan</p>
                            <button
                                className="close-modal-contact"
                                onClick={toggleModal}>Fermer
                            </button>
                        </div>
                    </div>

                </div>

            )}
        </>
    )
}
export default ContactBtn;