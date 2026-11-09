import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <p className="section__kicker">Compétences</p>
          <h2 className="section__title">Technologies pratiquées</h2>
        </div>

        <div className="skills__grid">
          {skills.map((g) => (
            <div key={g.category} className="card skill-card">
              <h3>{g.category}</h3>
              <div className="skill-card__items">
                {g.items.map((it) => (
                  <span key={it} className="skill-pill">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
