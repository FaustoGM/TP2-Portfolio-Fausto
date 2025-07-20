import "../styles/css/experiencia.css";

const Experiencia = () => {
  return (
    <section id="experience" className="seccion">
  <div className="barra-seccion" />
  <h2 className="titulo-seccion">Experiencia</h2>
  <p className="subtitulo-seccion">
    A lo largo de mi formación trabajé en distintos proyectos de desarrollo web, enfocándome en interfaces limpias, modernas y funcionales.
  </p>
  <ul className="lista-experiencia">
    <li><strong>Proyecto Portfolio:</strong> Desarrollo de portfolio personal en React.</li>
    <li><strong>TP1 UTN:</strong> Maquetación web con HTML, CSS y JS vanilla.</li>
    <li><strong>TP2 UTN:</strong> Migración completa del TP1 a React con componentes reutilizables.</li>
    <li><strong>Diseños Responsivos:</strong> Uso de media queries para adaptar a distintos dispositivos.</li>
  </ul>
</section>

  );
};

export default Experiencia;
