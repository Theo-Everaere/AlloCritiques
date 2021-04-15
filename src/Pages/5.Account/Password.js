import React, { Component } from 'react';
import ModalPassword from './Modals/ChangePassword/ModalPassword';


class Password extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModalPassword: false,
        }
    }

    handlePasssword = () => {
        this.setState({
            showModalPassword: !this.state.showModalPassword,
        })
    }

    render() {
        const modal = this.state.showModalPassword && <ModalPassword />
        return (
            <>
                <button className="account-btn-password" onClick={this.handlePasssword} >Modifier votre mot de passe</button>
                {modal}
            </>
        )

    }
}
export default Password;


