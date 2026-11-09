import { person } from "../data";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" />
      <div className="hero__content">
        <div className="hero__avatar">
          <img src={`${import.meta.env.BASE_URL}avatar.svg`} alt={`${person.firstName} ${person.lastName}`} />
        </div>
        <p className="hero__kicker">{person.available}</p>
        <h1 className="hero__title">
          {person.firstName} <span className="hero__accent">{person.lastName}</span>
        </h1>
        <h2 className="hero__subtitle">{person.title}</h2>
        <p className="hero__tagline">{person.tagline}</p>

        <div className="hero__actions">
          <button
            className="btn btn--primary"
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
          >
            Voir mes projets
          </button>
          <a className="btn btn--ghost" href={`${import.meta.env.BASE_URL}cv.pdf`} download>
            Télécharger mon CV
          </a>
          <button
            className="btn btn--ghost"
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          >
            Me contacter
          </button>
        </div>

        <div className="hero__meta">
          <span>📍 {person.location}</span>
          <span>✉ {person.email}</span>
          <a href="https://www.linkedin.com/in/kanto-fitahiana-andriakotoharison-7a57b5361" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Harison788" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
