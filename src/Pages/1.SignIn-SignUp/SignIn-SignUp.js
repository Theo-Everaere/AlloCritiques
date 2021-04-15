import React, { Component } from "react";
import LoginBox from "./LogInBox";
import RegisterBox from "./RegisterBox";
import { DATAS } from "../../Constantes/MOCKDATA";
import "./SignIn-SignUp.css";

class SignInSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false,
        };
    }

    showLoginBox = () => {
        this.setState({ isLoginOpen: true, isRegisterOpen: false });
    };

    showRegisterBox = () => {
        this.setState({ isRegisterOpen: true, isLoginOpen: false });
    };

    render() {
        return (
            <div className="root-container">
                <div className="box-controller">
                    <div
                        className={
                            "controller " +
                            (this.state.isLoginOpen ? "selected-controller" : "")
                        }
                        onClick={this.showLoginBox}
                    >
                        {DATAS.CONNEXION}
                    </div>

                    <div
                        className={
                            "controller " +
                            (this.state.isRegisterOpen ? "selected-controller" : "")
                        }
                        onClick={this.showRegisterBox}
                    >
                        {DATAS.INSCRIPTION}
                    </div>
                </div>

                <div className="box-container">
                    {this.state.isLoginOpen && <LoginBox />}
                    {this.state.isRegisterOpen && <RegisterBox />}
                </div>
            </div>
        );
    }
}

export default SignInSignUp;
