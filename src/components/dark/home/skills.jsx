import React from 'react';
import data from '../../../data/skills.json';
function Skills() {
  return (
    <div
      className="sec-box skills section-padding bord-thin-bottom"
      id="skills"
    >
      <div className="row">
        <div className="col-lg-4 valign">
          <div className="sec-head md-mb80 wow fadeIn">
            <h6 className="sub-title opacity-7 mb-15">SKILLS</h6>
            <h3>
              <span className="main-color">Habilidades</span><br/> Técnicas
            </h3>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            {data.map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="item mb-30">
                  <div className="d-flex align-items-center mb-30 wow fadeIn" data-wow-delay=".2s">
                    <div className="mr-30">
                      <div className="img icon-img-40">
                        <img src={item.photo} alt="" />
                      </div>
                    </div>
                    <div>
                      <h6 className="fz-18">{item.title}</h6>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <span className="progres" data-value={item.persent}></span>
                  </div>
                  <span className="value">{item.persent}</span>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
