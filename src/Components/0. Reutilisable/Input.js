import React, { Component } from 'react'

class Input extends Component {
    render() {
        const { type, name, className, placeholder, onChange } = this.props
        return (
            <input
                type={type}
                name={name}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
            />

        )
    }
}

export default Input;

