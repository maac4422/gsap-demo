import React, {useEffect, useRef, useState} from 'react'
import './App.css';
import { gsap, Power3} from 'gsap';
import { CustomEase } from "gsap/CustomEase";
import {ReactComponent as YourSvg} from './test-tube-svgrepo-com.svg'
import { SvgIcon } from '@material-ui/core';


function App() {
  let app = useRef(null)
  let circle = useRef(null)
  let circleRed = useRef(null)
  let circleBlue = useRef(null)
  let actionMatchEventContainer = useRef(null)
  let actionMatchBlue = useRef(null)
  let actionMatchRed = useRef(null)
  let actionMatchGray = useRef(null)
  let textEvent = useRef(null)
  let arrowRoot = useRef(null)
  let svgImage = useRef(null)

  gsap.registerPlugin(CustomEase);

  const [expandedCircle, setExpandedCircle] = useState(false)
  const [textNotification, setTextNotification] = useState("")

  const handleExpand = () => {
    gsap.to(circleRed, .8, {width: 200, height: 200, ease: Power3.easeOut})
    setExpandedCircle(true)
  }

  const handleShrink = () => {
    gsap.to(circleRed, .8, {width: 75, height: 75, ease: Power3.easeOut})
    setExpandedCircle(false)
  }

  useEffect(() => {
    gsap.to(app, 0, {visibility: 'visible'})
    /*
    TweenMax.from(circle, .8, {opacity: 0, x: 40, ease: Power3.easeOut})
    TweenMax.from(circleRed, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: 2})
    TweenMax.from(circleBlue, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay:4})
    */
    //TweenMax.staggerFrom([circle,circleRed,circleBlue], .8, {opacity: 0, x: 40, ease: Power3.easeOut}, .2)
  }, [])

  const actionMatchEvent = () => {
    CustomEase.create("custom", "M0,0 C0.048,0.382 0.192,1.499 0.5,1.5 0.85,1.5 1,0 1,0 ");
    //TweenMax.to(actionMatchEventContainer ,{duration: 4 ,backgroundColor: "#6b5b95", ease: Power3.easeOut})


    //Animacion de div

    /*
    gsap.to(actionMatchBlue ,{duration: 1 ,width: "100%", ease: "custom",
      onComplete: function(){ 
        setTextNotification("TOUCH DOWN !!!!!")
      }
    })
    
    gsap.to(actionMatchGray ,{duration: 1 ,width: "100%" , ease: "custom", delay: 0.2})

    gsap.to(actionMatchRed ,{duration: 1 ,width: "100%" , ease: "custom", delay: 0.5,  
      onComplete: function(){ 
        setTextNotification("BUCCARESS")
      }
    })
*/
    
    gsap.to(arrowRoot ,{duration: 5 ,width: "100%", ease: "custom", delay: 0})
    //gsap.to(".talkbubble:before" ,{duration: 1 ,backgroundColor: "#6b5b95" , ease: "custom", delay: 0})
    
    
    
  }

  const changeSVG = () => {
    
    gsap.to(svgImage ,{duration: 2 ,fill: "rgb(255,0,255)", ease: "custom", delay: 0})
  }


  //gsap.to(graph, { duration: 2.5, ease: CustomEase.create("custom", "M0,0,C0.143,0.382,0.243,1.151,0.489,1.152,0.769,1.152,0.792,0.001,1,0"), y: -500 });



  //linea hasta arriba
  //gsap.to(graph, { duration: 2.5, ease: CustomEase.create("custom", "M0,0,C0.143,0.382,0.243,1.293,0.489,1.294,0.769,1.294,0.792,0.001,1,0"), y: -500 });


  //150%
  //Version mas precisa
  //gsap.to(graph, { duration: 2.5, ease: CustomEase.create("custom", "M0,0 C0.048,0.382 0.192,1.499 0.5,1.5 0.85,1.5 1,0 1,0 "), y: -500 });
  return (
    <div
      ref={el => app = el}
      className="App"
    >
      <header className="App-header">
        <div className="event-section" ref={el => actionMatchEventContainer = el}>
          
          <div className="content-colors">
            <p className="team-name" ref={el=> textEvent = el}> 
              {textNotification}
            </p>
            <div  id="talkbubble" className="talkbubble" ref={el => arrowRoot = el}></div>
          </div>

          <div className="content-colors-left">
            
          </div>


          <svg class="field" viewBox="0 0 120 60">
  
  <rect class="field__grass" x="0" y="0" width="120" height="60" fill="#5FA603"/>
  <g class="field__competitor field__competitor--home">
    <rect class="field__competitor-space" x="0" y="0" width="10" height="60" fill="blue" />
    <text class="field__competitor-name" x="6" y="30" transform="rotate(-90,6,30)">HOME</text>
  </g>
  <g class="field__competitor field__competitor--away">
    <rect class="field__competitor-space" x="110" y="0" width="10" height="60" fill="red" />
    <text class="field__competitor-name" x="114" y="30" transform="rotate(90,114,30)">AWAY</text>
  </g>
  <rect class="field-border" x="0" y="0" width="120" height="60" fill="none" stroke="#FFF" stroke-width="2"/>
  <path class="field-lines" d="M10 0 V60 M20 0 V60 M30 0 V60 M40 0 V60 M50 0 V60 M60 0 V60 M70 0 V60 M80 0 V60 M90 0 V60 M100 0 V60 M110 0 V60" stroke="#fff" stroke-width="0.25" />
  
  <line class="anim-line-1" x1="55" y1="1" x2="55" y2="59" stroke="#DBED67" stroke-width="1.5"/>
  <line class="anim-line-2" x1="65" y1="1" x2="65" y2="59" stroke="#8AAAFD" stroke-width="1.5"/>
  <path class="anim-curve" d="M 20 30 Q 40 10 60 30" stroke="red" stroke-dasharray="2 2" fill="transparent"/>
  <circle class="anim-dot" cx="60" cy="30" r="1.5" fill="red" />
  <polygon classes="anim-arrow" points="68,26 74,30 68,34" fill="red" />
</svg>
        </div>
        



        

        <button onClick={actionMatchEvent}>
          TouchDown
        </button>

        <button onClick={changeSVG}>
          Change SVG
        </button>
      </header>
    </div>
  );
}

export default App;
