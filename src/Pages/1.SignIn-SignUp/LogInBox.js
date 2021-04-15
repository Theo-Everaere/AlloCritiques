import React from 'react';
import { ERREURS_ETIQUETTES } from '../../Constantes/ERRORS_LABEL'
import { ETIQUETTES } from '../../Constantes/LABELS'
import { DATAS } from '../../Constantes/MOCKDATA';
import Input from "../../Components/0. Reutilisable/Input";

class LoginBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: {},
            errors: {},
        };
    }

    handleChange = (event) => {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
        this.setState({
            input
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validate()) {
            console.log(this.state);

            let input = {};
            input[ETIQUETTES.IDENTIFIANT] = "";
            input[ETIQUETTES.MOT_DE_PASSE] = "";

            this.setState({ input: input });
            alert("Form submited");
        }
    };

    validate = () => {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input[ETIQUETTES.IDENTIFIANT]) {
            isValid = false;
            errors[ETIQUETTES.IDENTIFIANT] = ERREURS_ETIQUETTES.IDENTIFIANT;
        }

        if (!input[ETIQUETTES.MOT_DE_PASSE]) {
            isValid = false;
            errors[ETIQUETTES.MOT_DE_PASSE] = ERREURS_ETIQUETTES.MOT_DE_PASSE;
        }
        this.setState({ errors: errors });
        return isValid;
    };


    render() {
        // const { input } = this.state
        const { errors } = this.state
        return (
            <div className="inner-container">

                <div className="header-signin">
                    {DATAS.CONNEXION}
                </div>

                <div className="box">

                    <div className="input-group">
                        <label htmlFor={ETIQUETTES.IDENTIFIANT}>{ETIQUETTES.IDENTIFIANT}</label>
                        <Input
                            type="text"
                            name={ETIQUETTES.IDENTIFIANT}
                            className="login-input"
                            placeholder={ERREURS_ETIQUETTES.IDENTIFIANT}
                            onChange={this.handleChange}
                        />
                        <small className="danger-error">{errors.identifiant}</small>
                    </div>


                    <div className="input-group">
                        <label htmlFor={ETIQUETTES.MOT_DE_PASSE}>{ETIQUETTES.MOT_DE_PASSE}</label>
                        <Input
                            type="password"
                            name={ETIQUETTES.MOT_DE_PASSE}
                            className="login-input"
                            placeholder={ERREURS_ETIQUETTES.MOT_DE_PASSE}
                            onChange={this.handleChange}
                        />
                        <small className="danger-error"> {errors.motDePasse}</small>
                    </div>



                    <button type="button" className="login-btn" onClick={this.handleSubmit}>
                        {DATAS.CONNEXION}
                    </button>

                </div>

            </div>
        )
    }
}

export default LoginBox;