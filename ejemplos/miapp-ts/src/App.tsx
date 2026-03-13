import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MiComponente from "./MiComponente";
import HolaMundo from "./HolaMundo";

function App() {
  return (
    <>
      <MiComponente></MiComponente>
      <HolaMundo
        nombre="pepe"
        edad={12}
        direccion={{ calle: "", numero: 12 }}
      />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
