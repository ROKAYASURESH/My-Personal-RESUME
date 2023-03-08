import React from "react";
import Header from "../components/Header";

const Skills = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5 clip">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
<div>
  <div className="tab-content" id="pills-tabContent">
    {/* Skilll */}
    <div className="tab-pane fade show active" id="pills-skill" role="tabpanel" aria-labelledby="pills-skill-tab" tabIndex={0}>
      <div className="single-progress">
        <h6>HTML</h6>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
          <div><span className="label">90%</span></div>
        </div>
      </div>
      <div className="single-progress">
        <h6>CSS</h6>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '82%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
          <div><span className="label">82%</span></div>
        </div>
      </div>
      <div className="single-progress">
        <h6>Javascript</h6>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
          <div><span className="label">20%</span></div>
        </div>
      </div>
      <div className="single-progress">
        <h6>React JS</h6>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '36%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
          <div><span className="label">36%</span></div>
        </div>
      </div>
      <div className="single-progress">
        <h6>Photoshop</h6>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
          <div><span className="label">25%</span></div>
        </div>
      </div>
    </div>
  </div>  
 
</div>



            <div class="subheading mb-2 mt-5">Workflow</div>
            {/* <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Mobile-First, Responsive Design
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Browser Testing & Debugging
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Functional Teams
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Agile Development & Scrum
              </li>
            </ul> */}
                        <ul class="list-inline dev-icons" style={{float:"right"}}>
              <li class="list-inline-item text-danger">
                <i class="fab fa-html5  "></i>
              </li>
              <li class="list-inline-item text-danger">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item text-danger">
                <i class="fab fa-js-square"></i>
              </li>
              {/* <li class="list-inline-item text-danger">
                <i class="fab fa-angular"></i>
              </li> */}
              <li class="list-inline-item text-danger">
                <i class="fab fa-react"></i>
              </li>
              {/* <li class="list-inline-item text-danger">
                <i class="fab fa-node-js"></i>
              </li> */}
              {/* <li class="list-inline-item text-danger">
                <i class="fab fa-sass text-danger"></i>
              </li> */}
              {/* <li class="list-inline-item text-danger">
                <i class="fab fa-less"></i>
              </li> */}
              {/* <li class="list-inline-item text-danger">
                <i class="fab fa-wordpress"></i>
              </li> */}
              {/* <li class="list-inline-item text-danger">
                <i class="fab fa-gulp"></i>
              </li> */}
              {/* <li class="list-inline-item text-danger">
                <i class="fab fa-photoshop"></i>
              </li> */}
              <li class="list-inline-item text-danger">
                <i class="fab fa-npm"></i>
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Skills;
