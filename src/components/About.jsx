import { person, about, qualities, interests, languages } from "../data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about__hero">
          <div className="about__hero-image">
            <div className="about__image-wrap">
              <img src={`${import.meta.env.BASE_URL}banner.jpg`} alt="Illustration" className="about__inline-image" />
            </div>
          </div>
          <div className="about__hero-text">
            <p className="section__kicker">À propos</p>
            <h2 className="section__title">À propos</h2>
            <p className="section__subtitle">Qui suis-je ?</p>
            <p className="about__lead">{about}</p>
            <p className="about__note">
              {person.subtitle} — {person.available}.
            </p>
            <div className="about__block">
              <h3>Qualités</h3>
              <div className="chips">
                {qualities.map((q) => (
                  <span key={q} className="chip">{q}</span>
                ))}
              </div>
            </div>
            <div className="about__block">
              <h3>Centres d'intérêt</h3>
              <div className="chips">
                {interests.map((i) => (
                  <span key={i} className="chip chip--muted">{i}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="about__side">
          <div className="card card--info">
            <h3>Langues</h3>
            <ul className="lang-list">
              {languages.map((l) => (
                <li key={l.name}>
                  <span>{l.name}</span>
                  <span className="lang-list__level">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card card--info">
            <h3>Coordonnées</h3>
            <ul className="info-list">
              <li><strong>Email</strong><span>{person.email}</span></li>
              <li><strong>Téléphone</strong><span>{person.phone}</span></li>
              <li><strong>Adresse</strong><span>{person.address}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}