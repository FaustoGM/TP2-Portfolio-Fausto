import "../styles/css/tecnologias.css";

const Tecnologias = () => {
  return (
    <section id="tecnologias" className="seccion">
      <div className="contenido-seccion">
        <h2 className="titulo-seccion">Tecnologías</h2>
        <p className="subtitulo-seccion">
          Estas son algunas de las tecnologías que manejo
        </p>
        <div className="iconos-tecnologias">
          <img src="/assets/images/Tech/html5.svg" alt="HTML5" title="HTML5" />
          <img src="/assets/images/Tech/css3.svg" alt="CSS3" title="CSS3" />
          <img src="/assets/images/Tech/javascript.svg" alt="JavaScript" title="JavaScript" />
          <img src="/assets/images/Tech/react.svg" alt="React" title="React" />
          <img src="/assets/images/Tech/mysql.svg" alt="MySql" title="MySql" />
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
