import Swiper from 'swiper';
import { Navigation, Pagination ,EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default class Home {
    constructor() {

        this.createReRender()        
    }
    createReRender(){
        this.createTesmonial()
    }
    createTesmonial() {
        this.swiper = new Swiper('.testimonial', {
            modules: [Navigation, Pagination, EffectFade],
            direction: 'horizontal',
            slidesPerView: 1,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 2500,
            },
            autoplayDisableOnInteraction: false,
            effect: "fade",

            fadeEffect: { crossFade: true },
            pagination: { el: '.testimonial .swiper-pagination', clickable: true },
            navigation: {
                enabled: false,
                nextEl: '.testimonial .navigation .next',
                prevEl: '.testimonial .navigation .prev',
            },
            scrollbar: { el:'.swiper-scrollbar' },
            breakpoints: {
                768: {
                    navigation: {
                        enabled: true, 
                    }
                },
            },
        })

    }
}


