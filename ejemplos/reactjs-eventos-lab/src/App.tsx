import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

const App = () => {
  const handleClick = (event: any) => {
    console.log(event);
    const textoIntro = new Array(16).join(1 - "wat") + " Batman!";
    const configSpeech = new SpeechSynthesisUtterance(textoIntro);
    configSpeech.rate = 0.8;
    window.speechSynthesis.speak(configSpeech);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Que suene la intro
      </button>
    </div>
  );
};

export default App;
