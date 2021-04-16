import React from 'react';
import { ERREURS_ETIQUETTES } from '../../Constantes/ERRORS_LABEL'
import { ETIQUETTES } from '../../Constantes/LABELS'
import { DATAS } from '../../Constantes/MOCKDATA';
import Input from "../../Components/0. Reutilisable/Input";
import { DatasUserContext } from "../../Context/UserContext"
import "./RegisterBox.css"

class RegisterBox extends React.Component {
    static contextType = DatasUserContext;
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
            input[ETIQUETTES.EMAIL_INVALIDE] = "";
            input[ETIQUETTES.MOT_DE_PASSE] = "";
            input[ETIQUETTES.MOT_DE_PASSE_CONFIRMER] = "";

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
        if (!input[ETIQUETTES.EMAIL]) {
            isValid = false;
            errors[ETIQUETTES.EMAIL] = ERREURS_ETIQUETTES.EMAIL_INVALIDE;
        }
        if (typeof input[ETIQUETTES.EMAIL] !== "undefined") {
            let pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            if (!pattern.test(input[ETIQUETTES.EMAIL])) {
                isValid = false;
                errors[ETIQUETTES.EMAIL] = ERREURS_ETIQUETTES.EMAIL_INVALIDE;
            }
        }
        if (typeof input[ETIQUETTES.MOT_DE_PASSE] !== "undefined") {
            let pattern = new RegExp(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            );
            if (!pattern.test(input[ETIQUETTES.MOT_DE_PASSE])) {
                isValid = false;
                errors[ETIQUETTES.MOT_DE_PASSE] = ERREURS_ETIQUETTES.MOT_DE_PASSE_REGLE;
            }
        }
        console.log(input[ETIQUETTES.MOT_DE_PASSE]);

        if (!input[ETIQUETTES.MOT_DE_PASSE]) {
            isValid = false;
            errors[ETIQUETTES.MOT_DE_PASSE] = ERREURS_ETIQUETTES.MOT_DE_PASSE;
        }

        if (!input[ETIQUETTES.MOT_DE_PASSE_CONFIRMER]) {
            isValid = false;
            errors[ETIQUETTES.MOT_DE_PASSE_CONFIRMER] = ERREURS_ETIQUETTES.MOT_DE_PASSE_CONFIRMER;
        }
        if (
            typeof input[ETIQUETTES.MOT_DE_PASSE] !== "undefined" &&
            typeof input[ETIQUETTES.MOT_DE_PASSE_CONFIRMER] !== "undefined"
        ) {
            if (input[ETIQUETTES.MOT_DE_PASSE] !== input[ETIQUETTES.MOT_DE_PASSE_CONFIRMER]) {
                isValid = false;
                errors[ETIQUETTES.MOT_DE_PASSE] = ERREURS_ETIQUETTES.MOT_DE_PASSE_DIFFERENT;
            }
        }

        this.setState({ errors: errors });
        return isValid;
    };

    render() {
        // const { input } = this.state
        console.log("ici", this.context)
        const { errors } = this.state
        return (
            <div className="register-inner-container">

                <div className="register-header-signin">
                    {DATAS.INSCRIPTION}
                </div>

                <div className="register-box">

                    <div className="register-input-group">
                        <label htmlFor={ETIQUETTES.IDENTIFIANT}>{ETIQUETTES.IDENTIFIANT}</label>
                        <Input
                            type="text"
                            name={ETIQUETTES.IDENTIFIANT}
                            className="register-input"
                            placeholder={ERREURS_ETIQUETTES.IDENTIFIANT}
                            onChange={this.handleChange}
                        />
                        <small className="register-danger-error">{errors.identifiant}</small>
                    </div>

                    <div className="register-input-group">
                        <label htmlFor={ETIQUETTES.EMAIL}>{ETIQUETTES.EMAIL}</label>
                        <Input
                            type="text"
                            name={ETIQUETTES.EMAIL}
                            className="register-input"
                            placeholder={ERREURS_ETIQUETTES.EMAIL}
                            onChange={this.handleChange}
                        />
                        <small className="register-danger-error">{errors.email}</small>
                    </div>


                    <div className="register-input-group">
                        <label htmlFor={ETIQUETTES.MOT_DE_PASSE}>{ETIQUETTES.MOT_DE_PASSE}</label>
                        <Input
                            type="password"
                            name={ETIQUETTES.MOT_DE_PASSE}
                            className="register-input"
                            placeholder={ERREURS_ETIQUETTES.MOT_DE_PASSE}
                            onChange={this.handleChange}
                        />
                        <small className="register-danger-error"> {errors.motDePasse}</small>
                    </div>

                    <div className="register-input-group">
                        <label htmlFor={ETIQUETTES.MOT_DE_PASSE_CONFIRMER}>{ETIQUETTES.MOT_DE_PASSE_CONFIRMER}</label>
                        <Input
                            type="password"
                            name={ETIQUETTES.MOT_DE_PASSE_CONFIRMER}
                            className="register-input"
                            placeholder={ERREURS_ETIQUETTES.MOT_DE_PASSE_CONFIRMER}
                            onChange={this.handleChange}
                        />
                        <small className="register-danger-error"> {errors.confirmerMotDePasse}</small>

                    </div>

                    <button type="button" className="register-btn" onClick={this.handleSubmit}>
                        {DATAS.INSCRIRE}
                    </button>

                </div>

            </div>
        )
    }
}


export default RegisterBox;