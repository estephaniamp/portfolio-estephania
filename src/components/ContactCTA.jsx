import { ArrowRightIcon } from "./Icons.jsx";

function ContactCTA({ onContactOpen }) {
  return (
    <section className="contact-cta section">
      <div>
        <p className="eyebrow eyebrow_light">
          IDEAS · PERSONAS · OPORTUNIDADES
        </p>
        <h2>¿Construimos algo juntos?</h2>
        <p>
          Estoy abierta a oportunidades Front-End remotas, colaboraciones y
          proyectos interesantes.
        </p>
      </div>

      <button className="button button_blush" onClick={onContactOpen}>
        Hablemos <ArrowRightIcon size={17} />
      </button>
    </section>
  );
}

export default ContactCTA;
