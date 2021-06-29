import React, {useEffect, useRef, useState} from 'react'
import './App.css';
import { gsap, Power3} from 'gsap';
import { CustomEase } from "gsap/CustomEase";
import {ReactComponent as YourSvg} from './test-tube-svgrepo-com.svg'
import { SvgIcon } from '@material-ui/core';


function App() {
  let app = useRef(null)
  let circleRed = useRef(null)
  let blueLineMatch = useRef(null)
  let ballPath = useRef(null)
  let dotMatch = useRef(null)
  let arrowBackground = useRef(null)
  let arrowDeepSkyBlueBackground = useRef(null)
  let arrowBlueBackground = useRef(null)
  let actionMatchEventContainer = useRef(null)
  let yellowLineMatch = useRef(null)

  gsap.registerPlugin(CustomEase);

  const [textNotification, setTextNotification] = useState("")

  useEffect(() => {
    gsap.to(app, 0, {visibility: 'visible'})

    gsap.to(dotMatch ,{duration: .1 ,visibility: 'hidden',attr: {cx: "0", cy:"0"}})
    gsap.to(ballPath ,{duration: .1, visibility: 'hidden' ,attr: {d: "M 0 0 Q 0 0 0 0"}, ease: "custom"})
    gsap.to(arrowBlueBackground ,{duration: .1 , attr: {x: "200"} })
    gsap.to(arrowDeepSkyBlueBackground ,{duration: .1 ,attr: {x: "200"} })
    setTextNotification("1st & 10")
  }, [])

  const actionMatchEvent = () => {
    //CustomEase.create("custom", "M0,0 C0.048,0.382 0.192,1.499 0.5,1.5 0.85,1.5 1,0 1,0 ");
    gsap.to(arrowBlueBackground ,{duration: 1 ,visibility: 'visible',attr: {x: "-200"}, ease: "custom", delay: 0, 
      onComplete: function(){
        gsap.to(arrowBlueBackground ,{duration: 0.1,visibility: 'hidden' ,attr: {x: "200"}, ease: "custom", delay: 0})
      }
    })

    gsap.to(arrowDeepSkyBlueBackground ,{duration: 1,visibility: 'visible' ,attr: {x: "-200"}, ease: "custom", delay: 0.2, 
      onStart: function() {
        setTextNotification("3er & 20")
      },
      onComplete: function(){
        gsap.to(arrowDeepSkyBlueBackground ,{duration: 0.1,visibility: 'hidden' ,attr: {x: "200"}, ease: "custom", delay: 0})
      }
    })
  }

  const changeSVG = () => {
    /*
    gsap.to(svgImage ,{duration: 2 ,fill: "rgb(255,0,255)", ease: "custom", delay: 0})
    */
    gsap.to(blueLineMatch ,{duration: 2 ,attr: {x1: "80", x2: "80"}, ease: "custom", delay: 0})
    
    gsap.to(dotMatch ,{duration: 0.1 ,attr: {cx: "80", cy:"10"}, ease: "custom", delay: 0,
      onComplete: function(){
        gsap.to(dotMatch ,{duration: 0.1 ,visibility: 'visible', ease: "custom", delay: 0,
          onComplete: function(){
            gsap.to(ballPath ,{duration: 0.1,visibility: 'visible' ,attr: {d: "M 80 10 Q 80 10 80 10"}, ease: "custom", delay: 0,
              onComplete: function(){
                gsap.to(ballPath ,{duration: 1.5 ,attr: {d: "M 10 20 Q 30 10 80 10"}, ease: "custom", delay: 0})
              }
            })
          }
        })
      }
    })

  }

  return (
    <div
      ref={el => app = el}
      className="App"
    >
      <header className="App-header">
        <div className="arrow">
          <svg className="arrow__background" viewBox="0 0 165 48" fill="none">
            <path ref={el => arrowBackground = el} d="M164 47H24.4142L1.41421 24L24.4142 1H164V47Z" fill="#151B34" />
          </svg>
          <div className="arrow__content">
            {textNotification}
          </div>
          <svg className="arrow__curtain" viewBox="0 0 165 48" fill="none">
            <defs>
              <symbol id="arrow" viewBox="0 0 165 48">
                <polygon points="0,24 24,0 165,0 141,24 165,48 24,48" fill="inherit" />
              </symbol>
            </defs>
            <mask id="mask-arrow">
              <rect x="0" y="0" width="165" height="48" fill="black"/>
              <path d="M164 47H24.4142L1.41421 24L24.4142 1H164V47Z" fill="white"/>
            </mask>
            <g mask="url(#mask-arrow)">
              <use ref={el => arrowBlueBackground = el} x="-80" y="0" fill="blue" href="#arrow"/>
              <use ref={el => arrowDeepSkyBlueBackground = el} x="90" y="0" fill="deepskyblue" href="#arrow"/>
            </g>
            <path d="M164 47H24.4142L1.41421 24L24.4142 1H164V47Z" fill="none" stroke="white" stroke-width="2"/>
          </svg>
        </div>
        
        <div className="event-section" ref={el => actionMatchEventContainer = el}>
        


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

            <line class="anim-line-1" ref={el => yellowLineMatch = el} x1="55" y1="1" x2="55" y2="59" stroke="#DBED67" stroke-width="1.5"/>
            <line class="anim-line-2"  ref={el => blueLineMatch = el} x1="65" y1="1" x2="65" y2="59" stroke="#8AAAFD" stroke-width="1.5"/>
            <path class="anim-curve" ref={el => ballPath = el} d="M 20 30 Q 40 10 60 30" stroke="red" stroke-dasharray="2 2" fill="transparent"/>
            <circle class="anim-dot" ref={el => dotMatch = el} cx="60" cy="30" r="1.5" fill="red" />
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
