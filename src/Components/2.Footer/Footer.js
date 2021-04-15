import "./Footer.css"
import React, { Component } from 'react'
import ContactBtn from '../../Modals/Contact'
import Instagram from './icons/Instagram.svg'
import Facebook from './icons/Facebook.svg'
import Twitter from './icons/Twitter.svg'
import { DATAS } from "../../Constantes/MOCKDATA"



class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false
        }
    }

    render() {

        return (
            <footer className='Footer'>
                <div className='Copyright'><p>{DATAS.COPYRIGHT}</p></div>

                <ContactBtn />

                <div className='Logo_Reseau'>
                    <a href='https://www.instagram.com/ducati_m821/?hl=fr'>
                        <img src={Instagram} alt='Logo Instagram' />
                    </a>
                    <a href='https://www.facebook.com/AFPA.JEUNES'>
                        <img src={Facebook} alt='Logo Facebook' />
                    </a>
                    <a href='https://twitter.com/afpa_formation'>
                        <img src={Twitter} alt='Logo Twitter' />
                    </a>
                </div>
            </footer>
        )
    }
}

export default Footer
