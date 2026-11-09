import { person, socials } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section__head">
          <p className="section__kicker">Contact</p>
          <h2 className="section__title">Travaillons ensemble</h2>
          <p className="section__lead">
            Une question, une opportunité de stage ou un projet ? Écrivez-moi.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="card card--info">
              <h3>Coordonnées</h3>
              <ul className="info-list">
                <li><strong>Email</strong><a href={`mailto:${person.email}`}>{person.email}</a></li>
                <li><strong>Téléphone</strong><a href={`tel:${person.phone.replace(/\s/g, "")}`}>{person.phone}</a></li>
                <li><strong>Localisation</strong><span>{person.location}</span></li>
              </ul>
              <div className="social-links">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-link">
                    <span className="social-link__icon">{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
            <p className="contact__note">{person.available}</p>
          </div>

          <form
            className="contact__form card"
            action={`mailto:${person.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="form__row">
              <label>
                Nom
                <input type="text" name="name" placeholder="Votre nom" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="vous@exemple.com" required />
              </label>
            </div>
            <label>
              Sujet
              <input type="text" name="subject" placeholder="Objet du message" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Votre message..." required />
            </label>
            <button type="submit" className="btn btn--primary btn--full">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
