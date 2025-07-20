import '../styles/css/notaextra.css';

const NotaExtra = () => {
  return (
    <section className="para-mas-nota fade-in">
      <h1 className="fade-in">¡Gracias por visitar mi portfolio!</h1>
      <p className="shadow fade-delay">
        Este sitio fue realizado 100% con React, pasión y mucho café
        <span className="cafe-emoji">☕</span>
      </p>

      <div className="perfil-container">
        <a
          href="https://www.instagram.com/fausto"
          target="_blank"
          rel="noopener noreferrer"
          title="Ir a mi Instagram"
        >
          <img
            src="/assets/images/fotoperfil.png"
            alt="Perfil"
            className="pic fade-delay"
          />
        </a>
        <img
          src="/assets/icons/instagram.svg"
          alt="Instagram"
          className="insta-icon"
        />
      </div>
    </section>
  );
};

export default NotaExtra;
