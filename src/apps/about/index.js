import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module

import 'swiper/css';

export default class About {
    constructor() {

        this.createReRender()        
    }
    createReRender(){
        this.createAboutIntro()
    }
    createAboutIntro() {
        this.swiper = new Swiper('.about-section-1-slider', {
            modules: [Autoplay],
            direction: 'horizontal',
            loop: true,
            slidesPerView: 4,
            spaceBetween: 20, 
            speed: 3000,
            allowTouchMove: false, 
            autoplay: {
                delay: 0, 
                disableOnInteraction: false,
            },

        })

    }
}


