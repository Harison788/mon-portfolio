import { person, socials } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="footer__social" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} {person.fullName}. Tous droits réservés.</p>
        <p className="footer__muted">Portfolio réalisé avec React & Vite.</p>
      </div>
    </footer>
  );
}
