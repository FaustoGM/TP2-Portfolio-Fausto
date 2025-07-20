import "../styles/css/home.css";
import { useState, useEffect } from "react";

const frases = [
  "Transformando ideas en código...💻",
  "Gracias UTN👨‍🏫",
  "Gracias profe Nehuen 🙌",
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [letra, setLetra] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (letra < frases[index].length) {
        setCurrentText(frases[index].slice(0, letra + 1));
        setLetra(letra + 1);
      } else {
        setTimeout(() => {
          setLetra(0);
          setIndex((prev) => (prev + 1) % frases.length);
        }, 2000);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [letra, index]);

  return (
    <section className="home-section">
      <div className="home-content">
        <div className="typewriter-container">
          <p className="typewriter">{currentText}</p>
        </div>

        <h1 className="home-title">Hola, soy Fausto Giordano</h1>
        <h2 className="home-subtitle">Desarrollador Frontend en formación</h2>
        <p className="home-description">
          Bienvenido a mi portfolio. Estoy aprendiendo React y creando soluciones web modernas.
        </p>
        <a href="#contact" className="home-button">Contactame</a>
      </div>
    </section>
  );
};

export default Home;
