import React, { Component } from 'react';

class ModalPassword extends Component {

    render() {
        return (
            <div className="modal">
                <div>
                    <form>
                        <label htmlFor="Votre mail">
                            <input className="" type="text" placeholder="Votre Email"></input>
                        </label><br></br><br></br>

                        <label htmlFor="floatingInput">
                            <input type="password" className="" id="Password" placeholder="Nouveau mot de passe"></input>
                        </label><br></br><br></br>

                        <label htmlFor="floatingInput">
                            <input type="password" className="" id="Password2" placeholder="Confirmation mot de passe"></input>
                        </label><br></br><br></br>

                        <button className='btn-changer'>Envoyer</button>
                    </form>

                </div>
            </div>
        )
    }
}
export default ModalPassword;



