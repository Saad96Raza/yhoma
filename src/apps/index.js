import Home from './home';
import Portfolio from './portfolio';
import barba from '@barba/core';
import GSAP from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import '../scss/main.scss';
import { toArray } from 'lodash';



class App{
    constructor(){
        this.pages = {
            home : new Home(),
            portfolio : new Portfolio()
        }
        this.createLocomotiveScroll()
        this.createLettersComponents()
        this.createPreloader()
        this.createAjaxNavigation()
        this.createNavbar()
        this.createReRender()
        this.addEventListeners()
    }
    createAjaxNavigation(){

        const easeIn = (container,done)=> {
            return GSAP.to(container, {
                autoAlpha: 0,
                duration: 1,
                ease: 'none',
                onComplete: ()=> done()
            })
        }

        const  easeOut = (container) => {

            return GSAP.from(container, {
                autoAlpha: 0,
                duration: 1,
                ease: 'none',
            })
        }

       barba.init({
                preventRunning: true,
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
            ],
            
        })
        
    }

    createLettersComponents(){
        this.splitting = Splitting()
    }

    createPreloader(){
        
        let that = this
        that.title =  toArray(document.querySelectorAll('.preloader-title .char'))
        this.height = document.querySelector('.preloader')

        this.preloader = GSAP.timeline({repeat:-1,paused:true})
        this.preloader.to(that.title, {
            y: 0,                 
            duration: 1,
            ease: 'expo.out',
            stagger: 0.1,
        })
        this.preloader.to(that.title, {
            y: '-100%',                 
            duration: 1,
            ease: 'circ.easeInOut',
            stagger: 0.1,

        })

        this.preloader.play()
    }
    
    onLoad(){
        this.preloader.repeat(0)
        this.preloader.to(this.height,{
            height:0,
            duration: 1,
            ease: 'expo.out',
            onComplete:()=>{
                this.preloader.kill()
                this.locomotiveScroll.start()
            }
        })

    }

    createNavbar(){
        this.menuToggle =  document.querySelector('.menu-toggle')
        this.toggle = document.getElementById("pure-toggle-left")           
    }
    createLocomotiveScroll(){

        this.locomotiveScroll = new LocomotiveScroll({
            el: document.querySelector('.smooth-scroll'),
            smooth: true,
            reloadOnContextChange:true,
            lerp:0.050,
            multiplier:1.4,
            smoothMobile: false
        })
        this.locomotiveScroll.stop()

    }

    createReRender(){
        
        barba.hooks.before(() => {
            this.locomotiveScroll.destroy()
        })
    
        barba.hooks.after(() => {
            this.pages.home.createReRender() 
            this.pages.portfolio.createReRender() 
            this.locomotiveScroll.init()
            this.createLettersComponents()
        })
    }
    addEventListeners(){
        this.menuToggle.addEventListener('click',()=>{
            if(this.menuToggle && this.toggle){
                this.menuToggle.classList.toggle("active")
                this.toggle.checked = !this.toggle.checked
            }   
        })
        window.addEventListener('load',this.onLoad.bind(this))
    }
}

new App()
