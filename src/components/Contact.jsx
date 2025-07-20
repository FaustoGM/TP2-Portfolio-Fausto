import { useState } from "react";
import "../styles/css/contacto.css";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnqelrkd", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contacto</h2>
        <p className="contact-subtitle">
          ¿Querés contactarme? Completá el formulario
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            autoComplete="email"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Escribí tu mensaje..."
            required
          />
          <button type="submit">Enviar</button>
        </form>

        {formStatus === "success" && (
          <p className="form-message success">✅ ¡Mensaje enviado con éxito!</p>
        )}
        {formStatus === "error" && (
          <p className="form-message error">❌ Ocurrió un error. Probá más tarde.</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
