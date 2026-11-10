import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section__head">
          <p className="section__kicker">Projets</p>
          <h2 className="section__title">Réalisations académiques</h2>
        </div>

        <div className="projects__grid">
          {projects.map((p) => (
            <article key={p.title} className="card project-card">
              {p.image && (
                <div className="project-card__image">
                  <img src={`${import.meta.env.BASE_URL}${p.image.replace(/^\//, "")}`} alt={p.title} />
                </div>
              )}
              <div className="project-card__head">
                <h3>{p.title}</h3>
                <span className="project-card__role">{p.role}</span>
              </div>
              <p className="project-card__period">{p.period}</p>
              <p className="project-card__desc">{p.description}</p>
              <div className="project-card__tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
