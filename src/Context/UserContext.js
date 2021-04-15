import React, { Component, createContext } from "react";
export const DatasUserContext = createContext();

class DatasUserContextProvider extends Component {
    state = {
        identifiant: "",
        nom: "",
        email: "",
        password: "",
    };

    showData = () => {
        this.setState({
            identifiant: this.state.identifiant,
            nom: this.state.nom,
            email: this.state.email,
            password: this.state.password,
        });
    };
    render() {
        return (
            <DatasUserContext.Provider
                value={{ ...this.state, showData: this.showData }}
            >
                {this.props.children}
            </DatasUserContext.Provider>
        );
    }
}
export default DatasUserContextProvider;