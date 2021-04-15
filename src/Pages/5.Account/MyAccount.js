import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Account.css';
import Photo from './ImgUser/Photo';
import Password from './Password';





class MyAccount extends Component {

    render() {
        return (
            <>
                <h1 className="title-account">MON COMPTE</h1>

                <div className="account-page">

                    <div className="account-container">

                        <ul className="account-list-nav">
                            <Link to="/wishlist"><li className="account-list-items">MA LISTE</li></Link>
                            <Link to="/watchlist"><li className="account-list-items">FILMS VUS</li></Link>
                            <li><Password /></li>
                            <li></li>
                        </ul>
                    </div>

                    <Photo />

                </div>
            </>



        )
    }
}
export default MyAccount;