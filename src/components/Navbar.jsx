import { useState, useEffect } from "react";
import { person, navLinks } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <button className="navbar__brand" onClick={() => go("hero")}>
          <span className="navbar__monogram">K</span>
          <span className="navbar__name">{person.firstName} {person.lastName}</span>
        </button>

        <nav className={`navbar__nav ${open ? "is-open" : ""}`}>
          {navLinks.map((l) => (
            <button key={l.id} className="navbar__link" onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
          <a className="navbar__link navbar__cv" href={`${import.meta.env.BASE_URL}cv.pdf`} download>
            CV (PDF)
          </a>
        </nav>

        <button
          className="navbar__burger"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
