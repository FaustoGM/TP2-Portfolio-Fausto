import "../styles/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__texto">
        © {new Date().getFullYear()} Fausto Giordano — Todos los derechos reservados.
      </p>
      <div className="footer__iconos">
        <a href="https://github.com/FaustoGM" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/fausto-giordano/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:faustogiordanom@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
