import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <p className="section__kicker">Parcours</p>
          <h2 className="section__title">Formation académique</h2>
        </div>

        <div className="timeline">
          {education.map((e, i) => (
            <div key={i} className="timeline__item">
              <div className="timeline__dot" />
              <div className="timeline__content card">
                <h3>{e.degree}</h3>
                <p className="timeline__school">{e.school}</p>
                <p className="timeline__period">{e.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
