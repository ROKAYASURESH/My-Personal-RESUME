import React from "react";
import Header from "../components/Header";
import Award from "./Award";
import Education from "./Education";
import Interest from "./Interest";
import Skills from "./Skills";
const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
      
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0 clips ">
              Suresh-
              <span class="text-danger clip">Rokaya</span>
            </h1>
            <div class="subheading mb-5">
             Koteshwor 32 Kathmandu
              <a href="mailto:name@email.com"> rokayasuresh028@gmail.com</a>
            </div>
            <p class="lead mb-5">
                As a Front-End developer, I have a understanding of web technologies and the ability to create and maintain websites and web applications. I have a good grasp of programming languages such as HTML, CSS, and JavaScript, as well as attach with frameworks and libraries like Bootstrap and React JS .
           </p>
            <div class="social-icons">
              <a class="social-icon" href="#!" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/ROKAYASURESH" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="https://www.facebook.com/suresh.rokaya.712/" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />
        <Education/>
        <Skills/>
        <Interest/>
        <Award/>
      </div>
    </>
  );
};

export default Home;
