
import React, {useEffect, useRef, useState} from 'react'
import { gsap} from 'gsap';
import './InformationMatchComponent.css';

function InformationMatchComponent(props) {

    let arrowDeepSkyBlueBackground = useRef(null)
    let arrowBlueBackground = useRef(null)

    useEffect(() => {
        gsap.to(arrowBlueBackground ,{duration: .1, visibility:"hidden" , attr: {x: "200"} })
        gsap.to(arrowDeepSkyBlueBackground ,{duration: .1, visibility:"hidden" ,attr: {x: "200"} })
    }, [])

    useEffect(() => {
        if(props.textNotification)
        {
            gsap.to(arrowBlueBackground ,{duration: 1 ,visibility: 'visible',attr: {x: "-200"}, ease: "custom", delay: 0, 
                onComplete: function(){
                    gsap.to(arrowBlueBackground ,{duration: 0.1,visibility: 'hidden' ,attr: {x: "200"}, ease: "custom", delay: 0})
                }
            })
      
            gsap.to(arrowDeepSkyBlueBackground ,{duration: 1,visibility: 'visible' ,attr: {x: "-200"}, ease: "custom", delay: 0.2, 
                onStart: function() {
                    //setTextNotification("3er & 20")
                },
                onComplete: function(){
                    gsap.to(arrowDeepSkyBlueBackground ,{duration: 0.1,visibility: 'hidden' ,attr: {x: "200"}, ease: "custom", delay: 0})
                }
            })
        }
    }, [props.textNotification])

    const {
        textNotification
    } = props

    return (
        <div>
            <div className="arrow">
                <svg className="arrow__background" viewBox="0 0 165 48" fill="none">
                    <path  d="M164 47H24.4142L1.41421 24L24.4142 1H164V47Z" fill="#151B34" />
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
        </div>
    )
}

export default InformationMatchComponent;