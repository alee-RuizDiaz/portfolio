import React from 'react';
import { Link } from 'react-scroll';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="row justify-content-end rest">
        <div className="col-lg-8 rest">
          <ul className="navbar-nav main-bg d-flex justify-content-end">
            <li className="nav-item">
              <Link to="home" spy={true} smooth={true}>
                <span>Sobre Mi</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="services" spy={true} smooth={true}>
                <span>Servicios</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="skills" spy={true} smooth={true}>
                <span>Skills</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="portfolio" spy={true} smooth={true}>
                <span>Proyectos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" spy={true} smooth={true}>
                <span>Contacto</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
