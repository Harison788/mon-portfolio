import { person } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {person.fullName}. Tous droits réservés.</p>
        <p className="footer__muted">Portfolio réalisé avec React & Vite.</p>
      </div>
    </footer>
  );
}
