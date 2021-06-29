import React, {useEffect, useRef, useState} from 'react'
import './App.css';
import { gsap} from 'gsap';
import { CustomEase } from "gsap/CustomEase";
import InformationMatchComponent from './InformationMatchComponent'
import StadiumComponent from './StadiumComponent'


function App() {

  gsap.registerPlugin(CustomEase);
  const [matchInformation, setMatchInformation] = useState({
    textNotification: '',
  });

  const [stadiumInformation, setStadiumInformation] = useState({
    showBallPath: false,
    ballPathPos: "",
    yellowLinePos: "",
    blueLinePos: "",
    showDotMatch: false,
    dotMatchPos: ""
  });

  useEffect(() => {
    setMatchInformation({
      textNotification: '1er & 10',
    })
  }, [])

  const actionMatchEvent = () => {
    if(matchInformation.textNotification == "1er & 10"){
      setMatchInformation({
        textNotification: '3er & 20',
      })
    }else{
      setMatchInformation({
        textNotification: '1er & 10',
      })
    }
    //CustomEase.create("custom", "M0,0 C0.048,0.382 0.192,1.499 0.5,1.5 0.85,1.5 1,0 1,0 ");
  }

  const changeSVG = () => {
    setStadiumInformation({
      showBallPath: true,
      ballStartPos: "M 80 10 Q 80 10 80 10",
      ballPathPos: "M 10 20 Q 30 10 80 10",
      yellowLinePos: "",
      blueLinePos: "80",
      showDotMatch: true,
      dotMatchPosX: "80",
      dotMatchPosY: "10"
    })
  }

  return (
    <div
      className="App">
      <header className="App-header">
        
        <InformationMatchComponent {...matchInformation} />
        
        <div className="event-section" >
        
          <StadiumComponent {...stadiumInformation}/>
         
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
