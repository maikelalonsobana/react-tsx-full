import noticias from "../data/noticias.json";
import Noticia from "./Noticia";

const App = () => {
  return (
    <div>
      {noticias.map((noticia) => (
        <Noticia key={noticia.id} noticia={noticia} />
      ))}
    </div>
  );
};

export default App;
