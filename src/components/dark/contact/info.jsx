import React from 'react';

function Info() {
  return (
    <div className="sec-box contact section-padding bord-thin-top" id="info">
      <div className="row">
        <div className="col-lg-5">
          <div className="sec-head md-mb80 wow fadeIn">
            <h6 className="sub-title mb-15 opacity-7">contacto</h6>
            <h2 className="fz-50">Contactá con migo</h2>
            <p className="fz-15 mt-10">
              Si deseas trabajar con migo o simplemente quieres ponerte en contacto, ¡Me encantaría saber de ti!
            </p>
            <div className="phone fz-30 fw-600 mt-30 underline">
              <a href="https://wa.link/nd69y9" target="_blank" rel="noopener noreferrer" className="main-color">
                +54 11 3112 4079
              </a>
            </div>
            <ul className="rest social-text d-flex mt-60">
              <li className='mr-30'>
                <a href="https://github.com/alee-RuizDiaz" target="_blank" rel="noopener noreferrer" className="hover-this">
                  <span className="hover-anim">GitHub</span>
                </a>
              </li>
              <li className="mr-30">
                <a href="https://www.linkedin.com/in/alee-ruiz/" target="_blank" rel="noopener noreferrer" className="hover-this">
                  <span className="hover-anim">LinkedIn</span>
                </a>
              </li>
              <li className="mr-30">
                <a href="https://wa.link/nd69y9" target="_blank" rel="noopener noreferrer" className="hover-this">
                  <span className="hover-anim">WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7 valign">
          <div className="full-width wow fadeIn">
            <form id="contact-form" method="post" action="contact.php">
              <div className="messages"></div>

              <div className="controls row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      required="required"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-30">
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      placeholder="Asunto"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Mensaje"
                      rows="4"
                      required="required"
                    ></textarea>
                  </div>
                  <div className="mt-30">
                    <button type="submit">
                      <span className="text">Enviar Mensaje</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
