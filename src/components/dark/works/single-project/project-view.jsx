import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../../../../data/works.json';
import { ArrowLeft } from 'lucide-react';

function ProjectView() {

  const { title } = useParams();
  const project = data.find(item => item.title.replace(/\s+/g, '-').toLowerCase() === title);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="sec-box project pt-50 pb-50 radius-15">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <Link to="/proyectos" className="back-button">
            <ArrowLeft className='back-arrow' />
            <span>Volver</span>
          </Link>
          <div className="img mb-80">
            <img src={project.photo} alt={project.title} className="radius-5" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="cont md-mb50">
                <h3 className="mb-15 fw-500">{project.title}</h3>
                <p>{project.descripcion}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info sub-bg" id="sticky_item">
                <ul>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="far fa-calendar-alt mr-10"></i> Fecha:
                    </span>
                    <p className='pt-5'>{project.fecha}</p>
                  </li>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="fas fa-list-ul mr-10"></i> Categorias:
                    </span>
                    <p className='pt-5'>{project.categoria}</p>
                  </li>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="far fa-user mr-10"></i> Cliente:
                    </span>
                    <p className='pt-5'>{project.cliente}</p>
                  </li>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="fas fa-tools mr-10"></i> Skills Utilizadas:
                    </span>
                    <p className='pt-5'>{project.skill}</p>
                  </li>
                  <li className='d-flex flex-column'>
                    <span className="sub-title">
                      <i className="fas fa-globe mr-10"></i> Website:
                    </span>
                    <a className='pt-5' href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="imgs mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row md-marg">
              <div className="col-md-6">
                <div className="img sm-mb30">
                  <img src={project.photo2} alt={project.title} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="img">
                  <img src={project.photo3} alt={project.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectView;




