import Direccion from "./models/Direccion";

const estilos = {
  backgroundColor: "#242424",
  width: "100%",
  height: "500px",
};

interface HolaMundoProps {
  nombre: string;
  edad: number;
  direccion: Direccion;
}

const HolaMundo = (props: HolaMundoProps) => {
  /* {{nombre, edad, direccion}} */
  console.log(`render de Hola Mundo`);
  return {
    render() {
      <h1 style={estilos}>
        Hola Mundo con nombre: {props.nombre} y edad: {props.edad}
      </h1>;
    },
  };
};
export default HolaMundo;
