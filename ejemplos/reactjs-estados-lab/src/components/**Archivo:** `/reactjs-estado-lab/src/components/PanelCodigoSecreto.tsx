import React, { Component, useState } from "react";

type State = {
  codigoActual: string;
  codigoSecreto: string;
};

const PanelCodigoSecreto = () => {
  // State;
  /*  constructor(props) {
    super(props);
    this.state = {
      codigoSecreto: "3038",
      codigoActual: "",
    };
    this.handleClick = this.handleClick.bind(this);
  } */

  const [state, setState] = useState<State>({
    codigoSecreto: "3038",
    codigoActual: "",
  });
  // state : estado para acceder a valores codigoSecreto, codigoActual
  // useState : función para setear valores a codigoSecreto, codigoActual

  // este manejador captura el evento de clic del mouse sobre el botón
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const teclaPulsada = (event.target as HTMLDivElement).textContent;
    console.log(`teclaPulsada: ${teclaPulsada}`);
    // const { codigoActual, codigoSecreto } = this.state;

    let nuevoCodigoActual = state.codigoActual;
    if (teclaPulsada === "CLD") {
      nuevoCodigoActual = "";
    } else if (teclaPulsada === "DEL") {
      nuevoCodigoActual = state.codigoActual.slice(
        0,
        state.codigoActual.length - 1,
      );
    } else {
      if (state.codigoActual.length < 4) {
        nuevoCodigoActual = state.codigoActual + teclaPulsada;
      }
    }

    // aquí seteamos en el estado el nuevo código tecleado
    setState({ ...state, codigoActual: nuevoCodigoActual });

    /*   this.setState({
      codigoActual: nuevoCodigoActual,
    }); */

    // también se puede hacer el setState llamado a una función que devuelva el nuevo valor a setear
  };

  return (
    <div className="panel-codigo-secreto">
      <div className="display">{state.codigoActual}</div>
      <div className="teclas" onClick={handleClick}>
        <div className="fila-teclas">
          <button type="button" className="tecla">
            1
          </button>
          <button type="button" className="tecla">
            2
          </button>
          <button type="button" className="tecla">
            3
          </button>
        </div>
        <div className="fila-teclas">
          <button type="button" className="tecla">
            4
          </button>
          <button type="button" className="tecla">
            5
          </button>
          <button type="button" className="tecla">
            6
          </button>
        </div>
        <div className="fila-teclas">
          <button type="button" className="tecla">
            7
          </button>
          <button type="button" className="tecla">
            8
          </button>
          <button type="button" className="tecla">
            9
          </button>
        </div>
        <div className="fila-teclas">
          <button type="button" className="tecla">
            CLD
          </button>
          <button type="button" className="tecla">
            0
          </button>
          <button type="button" className="tecla">
            DEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default PanelCodigoSecreto;
