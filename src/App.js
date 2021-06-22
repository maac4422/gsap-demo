import React, {useEffect, useRef, useState} from 'react'
import './App.css';
import { gsap, Power3} from 'gsap';
import { CustomEase } from "gsap/CustomEase";


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
            <div className="event-color blue" ref={el => actionMatchBlue = el}></div>
            <div className="event-color gray" ref={el => actionMatchGray = el}></div>
            <div className="event-color red" ref={el => actionMatchRed = el}></div>
          </div>

          <div className="content-colors-left">
            
          </div>
          
        </div>

        <div className="talkbubble">
        </div>

        <button onClick={actionMatchEvent}>
          TouchDown
        </button>
      </header>
    </div>
  );
}

export default App;
