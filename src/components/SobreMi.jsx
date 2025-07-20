import "../styles/css/sobre-mi.css";

const SobreMi = () => {
  return (
    <section id="about" className="sobre-mi-section py-5">
      <div className="container text-center">
        <h2 className="titulo-seccion">Sobre mí</h2>
        <p className="descripcion">
          ¡Hola! Soy <strong>Fausto Giordano</strong>, desarrollador Front End apasionado por la creación de experiencias web modernas y funcionales.
          Me especializo en <strong>React</strong>, con foco en buenas prácticas, diseño responsive y rendimiento.
        </p>
        <p className="descripcion">
          Estoy en constante aprendizaje, perfeccionando mis habilidades en JavaScript, manejo de APIs, estados, routing y herramientas modernas como Vite, Git y Firebase.
        </p>
        <p className="descripcion">
          Busco sumar valor en equipos que valoren la colaboración, la mejora continua y el código limpio.
        </p>
      </div>
    </section>
  );
};

export default SobreMi;
