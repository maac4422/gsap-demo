
import React, {useEffect, useRef, useState} from 'react'
import { gsap} from 'gsap';
import './StadiumComponent.css';

function StadiumComponent(props) {
    let yellowLineMatch = useRef(null)
    let blueLineMatch = useRef(null)
    let ballPath = useRef(null)
    let dotMatch = useRef(null)
    

    useEffect(() => {
        gsap.to(dotMatch ,{duration: .1 ,visibility: 'hidden',attr: {cx: "0", cy:"0"}})
        gsap.to(ballPath ,{duration: .1, visibility: 'hidden' ,attr: {d: "M 0 0 Q 0 0 0 0"}, ease: "custom"})
        
    }, [])

    useEffect(() => {
        if(props.showBallPath){
            gsap.to(ballPath ,{duration: 0.1,visibility: 'visible' ,attr: {d: props.ballStartPos}, ease: "custom", delay: 0,
                onComplete: function(){
                    gsap.to(ballPath ,{duration: 1.5 ,attr: {d: props.ballPathPos}, ease: "custom", delay: 0})
                }
            })
        }
        else{
            gsap.to(ballPath ,{duration: .1, visibility: 'hidden' ,attr: {d: "M 0 0 Q 0 0 0 0"}, ease: "custom"})
        }
    },[props.showBallPath])

    useEffect(() => {
        if(props.showDotMatch)
        {
            gsap.to(dotMatch ,{duration: 0.1 ,attr: {cx: props.dotMatchPosX , cy: props.dotMatchPosY}, ease: "custom", delay: 0,
                onComplete: function(){
                    gsap.to(dotMatch ,{duration: 0.1 ,visibility: 'visible', ease: "custom", delay: 0})
                }
            })
        }
        else{
            gsap.to(dotMatch ,{duration: .1 ,visibility: 'hidden',attr: {cx: "0", cy:"0"}})
        }
    }, [props.showDotMatch])

    useEffect(() => {
       if(props.blueLinePos)
       {
            gsap.to(blueLineMatch ,{duration: 2 ,attr: {x1: props.blueLinePos, x2: props.blueLinePos}, ease: "custom", delay: 0})
       }
    }, [props.blueLinePos])

    return (
        <div>
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
    )
}

export default StadiumComponent;