import Swiper from 'swiper';
import { Navigation, Pagination ,EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


export default class Portfolio{
    constructor(){
        this.createReRender()
    }
     createReRender(){
        this.createGallery()
    }
    createGallery(){
        this.swiper = new Swiper('.gallery', {
            modules: [Navigation, Pagination, EffectFade],
            autoHeight: false,
            autoWidth: false,
            direction: 'horizontal',
            slidesPerView:1,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 2500,
            },
            autoplayDisableOnInteraction: false,

            effect: "fade",
            slidersPerView: 1,

            fadeEffect: { crossFade: true },
            pagination: { el: '.gallery .swiper-pagination', clickable: true },
            navigation: {
                enabled: false,
                nextEl: '.gallery .navigation .next',
                prevEl: '.gallery .navigation .prev',
            },
            breakpoints: {
                768: {
                    navigation: {
                        enabled: true, 
                    }
                },
            },
        })
        this.swiper.navigation.update()
    }
}