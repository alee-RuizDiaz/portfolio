import React, { useState } from 'react';
import { Link } from 'react-scroll';

function NavTop() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
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
          <span className="pe-7s-menu">
            <i className="fas fa-bars"></i>
          </span>
        </div>
        <div className={`mobile-menu ${menuVisible ? 'open' : ''}`}>
          <ul className="navbar-nav navbar-movil">
            <li className="nav-item">
              <Link to="home" spy={true} smooth={true} onClick={toggleMenu}>
                <span>Sobre Mi</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="services" spy={true} smooth={true} onClick={toggleMenu}>
                <span>Servicios</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="skills" spy={true} smooth={true} onClick={toggleMenu}>
                <span>Skills</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="portfolio" spy={true} smooth={true} onClick={toggleMenu}>
                <span>Proyectos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" spy={true} smooth={true} onClick={toggleMenu}>
                <span>Contacto</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavTop;




