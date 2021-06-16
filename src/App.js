import React, {useEffect, useRef} from 'react'
import './App.css';
import { TweenMax, Power3} from 'gsap';

function App() {

  let circle = useRef(null)
  let circleRed = useRef(null)
  let circleBlue = useRef(null)

  useEffect(() => {
    TweenMax.from(circle, .8, {opacity: 0, x: 40, ease: Power3.easeOut})
    TweenMax.from(circleRed, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay: 2})
    TweenMax.from(circleBlue, .8, {opacity: 0, x: 40, ease: Power3.easeOut, delay:4})
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <div className="cicle-container">
          <div
            ref={el=> circle = el}
            className="circle"></div>
           <div
            ref={el=> circleRed = el}
            className="circle red"></div>
          <div
            ref={el=> circleBlue = el}
            className="circle blue"></div>

        </div>
      </header>
    </div>
  );
}

export default App;
