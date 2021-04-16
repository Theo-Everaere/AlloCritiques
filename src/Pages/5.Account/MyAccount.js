import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalPassword from './Modals/ChangePassword/ModalPassword';
import ModalDelete from "./Modals/Delete/DeleteAccount"
import './Account.css';
import Photo from './ImgUser/Photo';

class MyAccount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showModalPassword: false,
            showModalDelete: false,
        }
    }

    handlePasssword = () => {
        this.setState({
            showModalPassword: !this.state.showModalPassword,
        })
    }
    handleDelete = () => {
        this.setState({
            showModalDelete: !this.state.showModalDelete,
        })
    }

    render() {
        const modalPassword = this.state.showModalPassword && <ModalPassword />
        const modalDelete = this.state.showModalDelete && <ModalDelete />

        return (
            <>
                <h1 className="title-account">MON COMPTE</h1>

                <div className="account-page">
                    {modalPassword}
                    {modalDelete}
                    <div className="account-container">

                        <ul className="account-list-nav">
                            <Link to="/wishlist"><li className="account-list-items">MA LISTE</li></Link>
                            <Link to="/watchlist"><li className="account-list-items">FILMS VUS</li></Link>
                            <li className="account-btn-modal" close={this.state.showModalPassword} onClick={this.handlePasssword}>CHANGER LE MOT DE PASSE</li>
                            <li className="account-btn-modal" onClick={this.handleDelete}>SUPPRIMER LE COMPTE</li>
                        </ul>

                    </div>

                    <Photo />

                </div>
            </>



        )
    }
}
export default MyAccount;