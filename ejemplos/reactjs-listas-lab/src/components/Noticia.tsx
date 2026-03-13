type noticiaType = {
  id: string;
  titulo: string;
  contenido: string;
};
const Noticia = (noticia: noticiaType) => {
  return (
    <div>
      <h2>{noticia.titulo}</h2>
      <p>{noticia.contenido}</p>
    </div>
  );
};

export default Noticia;
