import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../../data/works.json'

function Portfolio() {
  return (
    <div className="sec-box portfolio section-padding" id="portfolio">
      <div className="sec-head mb-30">
        <div className="row">
          <div className="col-lg-6">
            <h6 className="sub-title opacity-7 mb-15">Proyectos</h6>
            <h3>
              Mira mis Proyectos <br />{' '}
              <span className="main-color">Realizados</span>
            </h3>
          </div>
          <div className="col-lg-6 valign">
            <div className="go-more full-width d-flex justify-content-end">
              <Link to="/proyectos" className="d-flex">
                <span>
                  Ver todos los proyectos{' '}
                  <svg
                    className="arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 34.2 32.3"
                    xmlSpace="preserve"
                    style={{ strokeWidth: 2 }}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="row">
          {data?.slice(0, 4).map((item, index) => (
            <div key={index} className="col-lg-6 items">
              <div className="item mt-50 wow fadeInUp" data-wow-delay=".2s">
                <div className="img">
                  <Link to={`/proyecto/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
                    <img src={item.photo} alt={item.title} />
                  </Link>
                </div>
                <div className="cont mt-30 d-flex align-items-center">
                  <div>
                    <span className="tag">{item.categoria}</span>
                    <h6 className="line-height-1">
                      <Link to={`/proyecto/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>{item.title}</Link>
                    </h6>
                  </div>
                  <div className="ml-auto">
                    <div className="arrow">
                      <Link to={`/proyecto/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
                        <svg
                          className="arrow-right"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 34.2 32.3"
                          xmlSpace="preserve"
                          style={{ strokeWidth: 2 }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;



