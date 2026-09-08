import { useState } from "react";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "./Icons.jsx";

function Header({ onContactOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    ["Inicio", "#inicio"],
    ["Proyectos", "#proyectos"],
    ["Sobre mí", "#sobre-mi"],
  ];

  return (
    <header className="header">
      <a href="#inicio" className="header__brand" aria-label="Ir al inicio">
        <strong>Estephanía Martínez</strong>
        <span>FRONT-END DEVELOPER</span>
      </a>

      <nav className="header__nav" aria-label="Navegación principal">
        {navItems.map(([label, href]) => (
          <a key={label} href={href} className="header__link">
            {label}
          </a>
        ))}

        <button className="button button_dark" onClick={onContactOpen}>
          Hablemos <ArrowRightIcon size={17} />
        </button>
      </nav>

      <button
        className="header__menu-button"
        aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setMobileOpen((value) => !value)}
      >
        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {mobileOpen && (
        <div className="header__mobile-menu">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="header__mobile-link"
            >
              {label}
            </a>
          ))}

          <button
            className="button button_dark"
            onClick={() => {
              onContactOpen();
              setMobileOpen(false);
            }}
          >
            Hablemos <ArrowRightIcon size={17} />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
