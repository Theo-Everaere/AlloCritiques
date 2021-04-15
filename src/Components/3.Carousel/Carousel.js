import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import './Carousel.css'

import American_Nightmare_2 from './Films/American_Nightmare_2.jpg'
import Ca from './Films/Ca.jpg'
import Chronicle from './Films/Chronicle.jpg'
import Conjuring from './Films/Conjuring.jpg'
import Conjuring_2 from './Films/Conjuring_2.jpg'
import Dernier_train_pour_Busan from './Films/Dernier_train_pour_Busan.jpg'


class CarouselResponsive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            slides: [
                <img key={1} src={American_Nightmare_2} alt='Affiches film' />,
                <img key={2} src={Ca} alt='Affiches film' />,
                <img key={3} src={Chronicle} alt='Affiches film' />,
                <img key={4} src={Conjuring} alt='Affiches film' />,
                <img key={5} src={Conjuring_2} alt='Affiches film' />,
                <img key={6} src={Dernier_train_pour_Busan} alt='Affiches film' />
            ],
        }
    }

    render() {
        return (
            <div className='slides'>
                <Carousel
                    slides={this.state.slides}
                    slidesPerPage={5}
                    slideToScroll
                    infinite
                    arrows
                />
            </div>
        );
    }
}
export default CarouselResponsive;