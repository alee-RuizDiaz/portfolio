import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu } from 'lucide-react'; // Asegúrate de instalar lucide-react

function NavTop() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <span className='fz-20 logo-ruiz'>PORTFOLIO</span>
          </div>
          <div className="col-md-4 valign">
            <div className="social text-center full-width">
              <a href="https://github.com/alee-RuizDiaz" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/alee-ruiz/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://wa.link/nd69y9" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href="mailto:alee_ruizdiaz@hotmail.com">
                  <span className="sub-title fz-12">Alee_ruizdiaz@hotmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-butn" onClick={toggleMenu}>
          <Menu size={24} />
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="navbar-movil">
          <li>
            <Link to="home" spy={true} smooth={true} onClick={toggleMenu}>
              <span>SOBRE MI</span>
            </Link>
          </li>
          <li>
            <Link to="services" spy={true} smooth={true} onClick={toggleMenu}>
              <span>SERVICIOS</span>
            </Link>
          </li>
          <li>
            <Link to="skills" spy={true} smooth={true} onClick={toggleMenu}>
              <span>SKILLS</span>
            </Link>
          </li>
          <li>
            <Link to="portfolio" spy={true} smooth={true} onClick={toggleMenu}>
              <span>PROYECTOS</span>
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} onClick={toggleMenu}>
              <span>CONTACTO</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavTop;


