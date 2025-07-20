import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/css/navbar.css';

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm px-4">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">Fausto Giordano</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-2">
            <li className="nav-item">
              <a className="nav-link" href="#about">Sobre mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tech">Tecnologías</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experiencia</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contacto</a>
            </li>
            <li className="nav-item">
              <button
                onClick={toggleDarkMode}
                className="btn btn-sm btn-outline-secondary ms-3"
                title="Cambiar modo oscuro/claro"
              >
                🌙 / ☀️
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
