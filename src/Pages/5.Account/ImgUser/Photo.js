import React, { Component } from 'react';
import './UserImg.css';

class Photo extends Component {
    state = {
        profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
    }

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])

    }
    render() {

        const { profileImg } = this.state

        return (
            <div className="user-img-container">
                <img src={profileImg} alt="" id="img-user" className="img" />
                <input type="file" className="btn-img-upload" id="input" accepte="image/*" onChange={this.imageHandler} />
            </div>
        )
    }
};

export default Photo;