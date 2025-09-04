import Home from './home';
import Portfolio from './portfolio';
import barba from '@barba/core';
import GSAP from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

import '../scss/main.scss';




class App{
    constructor(){
            
    

        this.pages = {
            home : new Home(),
            portfolio : new Portfolio()
        }
        this.createLocomotiveScroll()

        this.createAjaxNavigation()
        this.createNavbar()
        this.createReRender()

        this.addEventListeners()
    }
    createAjaxNavigation(){

        const easeIn = (container, done )=> {
            return GSAP.to(container, {
                autoAlpha: 0,
                duration: 1,
                ease: 'none',
                onComplete: ()=> done()
            });
        }

        const  easeOut = (container) => {

            return GSAP.from(container, {
                autoAlpha: 0,
                duration: 1,
                ease: 'none',
            });
        }

       barba.init({
            transitions: [
                {
                once({ next }) {
                     easeOut(next.container);
                },
                leave({ current }) {
                    const done = this.async();
                    easeIn(current.container, done);
                },
                enter({ next }) {
                     easeOut(next.container);
                }
                }
            ]
        });


    }
    createNavbar(){
        this.menuToggle =  document.querySelector('.menu-toggle')
        this.toggle = document.getElementById("pure-toggle-left");

           
    }
    createLocomotiveScroll(){

        this.locomotiveScroll = new LocomotiveScroll({
            el: document.querySelector('.smooth-scroll'),
            smooth: true,
            reloadOnContextChange:true,
            lerp:0.050,
            multiplier:1.4
        });

    }

    createReRender(){
        
        barba.hooks.before(() => {
            this.locomotiveScroll.destroy()
        });

        barba.hooks.after(() => {
            this.pages.home.createReRender() 
            this.pages.portfolio.createReRender() 
            this.locomotiveScroll.init()   
        });

    }
    addEventListeners(){
            this.menuToggle.addEventListener('click',()=>{
                if(this.menuToggle && this.toggle){
                    this.menuToggle.classList.toggle("active")
                    this.toggle.checked = !this.toggle.checked
                }
                
            })
    }
}

new App()
