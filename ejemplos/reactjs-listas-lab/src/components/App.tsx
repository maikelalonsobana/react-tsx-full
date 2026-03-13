import noticias from "../data/noticias.json";
import Noticia from "./Noticia";

const App = (props) => {
  return (
    <div>
      {noticias.map((noticia) => (
        <Noticia
          key={noticia.id}
          titulo={props.titulo}
          contenido={props.contenido}
        />
      ))}
    </div>
  );
};

export default App;
