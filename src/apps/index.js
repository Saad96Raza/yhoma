import Home from './home';

import barba from '@barba/core';
import barbaCss from '@barba/css';

import _ from '../scss/main.scss';



class App{
    constructor(){
        this.pages = {
            home : new Home()
        }
        this.createAjaxNavigation()
    }
    createAjaxNavigation(){
        barba.use(barbaCss) 
        barba.init({
            transitions: [{
                once: () => {
                    console.log('once');
                },
                beforeLeave: () => {
                    console.log('beforeLeave');
                }
            }]
        });
    }
}

new App()
