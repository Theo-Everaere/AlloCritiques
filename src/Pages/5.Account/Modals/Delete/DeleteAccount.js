import React, { Component } from 'react';
import "./DeleteAccount.css"

class ModalRemove extends Component {

    render() {
        return (
            <div className="modal">
                <div>
                    <form>
                        <label htmlFor="Nom">
                            <input className="" type="text" placeholder="Name"></input>
                        </label><br></br><br></br>

                        <label htmlFor="Votre mail">
                            <input clasName="" type="text" placeholder="Email"></input>
                        </label><br></br><br></br>

                        <label htmlFor="floatingInput">
                            <input type="password" className="" id="floatingPassword" placeholder="Password"></input>
                        </label><br></br><br></br>

                        <input type="reset" value="Reset" />

                    </form>
                </div>
            </div>

        )
    }
}
export default ModalRemove;