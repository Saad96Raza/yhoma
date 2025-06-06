import $ from 'jquery';
import _ from  '../../apps/home/slider-revolution/rbtools.min'
import _ from '../../apps/home/slider-revolution/rs6.min'
import _ from '../../apps/home/slider-revolution/revolution.addon.bubblemorph.min'



export default class Home{
    constructor(){
    
        this.createSliderRevolution()
    }
    createSliderRevolution(){

        if(window.RS_MODULES === undefined) window.RS_MODULES = {};
        if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
        RS_MODULES.modules["onlyfans"] = {once: RS_MODULES.modules["onlyfans"]!==undefined ? RS_MODULES.modules["onlyfans"].once : undefined, init:function() {
            window.revapi45 = window.revapi45===undefined || window.revapi45===null || window.revapi45.length===0  ? document.getElementById("onlyfans") : window.revapi45;
            if(window.revapi45 === null || window.revapi45 === undefined || window.revapi45.length==0) { window.revapi45initTry = window.revapi45initTry ===undefined ? 0 : window.revapi45initTry+1; if (window.revapi45initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["onlyfans"].init()}); return;}
            window.revapi45 = $(window.revapi45);
            if(window.revapi45.revolution==undefined){ revslider_showDoubleJqueryError("onlyfans"); return;}
            revapi45.revolutionInit({
                    revapi:"revapi45",
                    DPR:"dpr",
                    sliderLayout:"fullscreen",
                    visibilityLevels:"1240,1240,1240,480",
                    gridwidth:"1240,1240,1240,480",
                    gridheight:"900,900,900,720",
                    spinner:"spinner7",
                    perspective:600,
                    perspectiveType:"global",
                    editorheight:"900,768,960,720",
                    responsiveLevels:"1240,1240,1240,480",
                    fullScreenOffsetContainer:"#masthead",
                    progressBar: {
                        bgcolor:"rgba(255,255,255,0.15)",
                        color:"#ffffff",
                        style:"cw",
                        horizontal:"right",
                        size:"1px",
                        radius:20,
                        x:"120px",
                        y:"25px"
                        },
                    navigation: {
                        wheelCallDelay:1000,
                        onHoverStop:false,
                        arrows: {
                            enable:true,
                            style:"clean_arrows",
                            left: {
                                anim:"left",
                                h_align:"right",
                                v_align:"bottom",
                                h_offset:65,
                                v_offset:20
                            },
                            right: {
                                anim:"right",
                                v_align:"bottom",
                                v_offset:20
                            }
                        }
                    },
                    parallax: {
                        levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,30],
                        type:"scroll",
                        origo:"slidercenter",
                        speed:0
                    },
                    viewPort: {
                        global:false,
                        globalDist:"-200px",
                        enable:false
                    },
                    fallbacks: {
                        allowHTML5AutoPlayOnAndroid:true
                    },
            });
            
            BubbleMorphAddOn($, revapi45, false);

        }} // End of RevInitScript
        if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
    }
}


