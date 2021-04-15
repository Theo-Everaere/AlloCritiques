import React, { Component } from 'react';
import ModalRemove from './Modals/ModalRemove'
import './Account.css';

class RemoveAccount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModalPassword: false,
        }
    }

    handlePasssword = () => {
        this.setState({
            showModalPassword: true,
        })
    }

    render() {
        const modal = this.state.showModalPassword && <ModalRemove />
        return (
            <div>
                <button onClick={this.handlePasssword} >Supprimer mon Compte</button>

                <br></br><br></br>
                {modal}
            </div>
        )

    }
}

export default RemoveAccount;