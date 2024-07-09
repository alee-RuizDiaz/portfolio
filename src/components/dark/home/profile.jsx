import React from 'react';
import curriculum from '../../../pdf/CvRuizDiaz.pdf';

function Profile() {
  return (
    <section id="home" className="intro-profile md-mb50">
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img">
                <img src="/assets/imgs/header/perfile1.webp" alt="Alejandro Ruiz Diaz" />
                <span className="icon">
                  <img src="/assets/imgs/resume/js.png" alt="javascript" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/icon2.png" alt="github" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/resume/elementor.png" alt="elementor" />
                </span>
              </div>
              <div className="info text-center mt-30">
                <h5>Alejandro Ruiz Diaz</h5>
                <p className="fz-12 pt-5 text-u">Desarrollador Web Frontend</p>
              </div>
              <div className="social text-center mt-20">
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
          </div>
        </div>
        <div className="col-lg-8 content main-bg d-flex flex-column align-items-start justify-content-center">
          <h1>
            Hola! Soy <span className="main-color">Alejandro Ruiz Diaz</span>{' '}
            <span className="bord">
              Desarrollador Web Fronted <i></i>
            </span>{' '}
            Bienvenidos a mi Portfolio.
          </h1>
          <div className="stauts mt-50">
            <div className="d-flex align-items-start flex-column">
              {
                /*
                <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>2</h2>
                  <p>
                    Años <br /> de Experiencia
                  </p>
                </div>
              </div>
                */
              }
              {/*
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>6k</h2>
                  <p>
                    Clients <br /> Worldwide
                  </p>
                </div>
              </div>
              */}
              <div>
                <div className="butn-presv">
                  <a href={curriculum} className="butn butn-md butn-bord radius-5 skew" target='_blank' rel="noopener noreferrer">
                    <span>Descargar CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
