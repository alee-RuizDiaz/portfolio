import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const validationSchema = Yup.object({
  user_name: Yup.string().required('Nombre es requerido'),
  user_email: Yup.string().email('Email inválido').required('Email es requerido'),
  subject: Yup.string(),
  user_message: Yup.string().required('Mensaje es requerido'),
});

const Info = () => {
  const formRef = useRef();

  const mostrarAlerta = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Mensaje Enviado Correctamente",
      showConfirmButton: false,
      timer: 1500
    });
  }

  const mostrarAlertaError = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Error al Enviar el Mensaje",
      showConfirmButton: false,
      timer: 1500
    });
  }

  const sendEmail = (values, { setSubmitting, resetForm }) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          setSubmitting(false);
          resetForm();
          mostrarAlerta();
        },
        (error) => {
          console.error('Error enviando el correo', error.text);
          setSubmitting(false);
          mostrarAlertaError();
        }
      );
  };

  return (
    <div className="sec-box contact section-padding bord-thin-top" id="info">
      <div className="row">
        <div className="col-lg-5">
          <div className="sec-head md-mb80 wow fadeIn">
            <h6 className="sub-title mb-15 opacity-7">contacto</h6>
            <h2 className="fz-50">Contactá conmigo</h2>
            <p className="fz-15 mt-10">
              Si deseas trabajar conmigo o simplemente quieres ponerte en contacto, ¡Me encantaría saber de vos!
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
            <Formik
              initialValues={{ user_name: '', user_email: '', subject: '', user_message: '' }}
              validationSchema={validationSchema}
              onSubmit={sendEmail}
            >
              {({ isSubmitting }) => (
                <Form id="contact-form" ref={formRef}>
                  <div className="controls row">
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <Field
                          type="text"
                          name="user_name"
                          placeholder="Nombre"
                          required
                        />
                        <ErrorMessage name="user_name" component="div" className="error-message" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <Field
                          type="email"
                          name="user_email"
                          placeholder="Email"
                          required
                        />
                        <ErrorMessage name="user_email" component="div" className="error-message" />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group mb-30">
                        <Field
                          type="text"
                          name="subject"
                          placeholder="Asunto"
                        />
                        <ErrorMessage name="subject" component="div" className="error-message" />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <Field
                          as="textarea"
                          name="user_message"
                          placeholder="Mensaje"
                          rows="4"
                          required
                        />
                        <ErrorMessage name="user_message" component="div" className="error-message" />
                      </div>
                      <div className="mt-30">
                        <button type="submit" disabled={isSubmitting}>
                          <span className="text">Enviar Mensaje</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;




