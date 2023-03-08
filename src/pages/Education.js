import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-4 clips">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-3">
              <div class="flex-grow-1">
                <h3 class="mb-0">University of Sunder Land <span style={{fontSize:"1.3rem", color:"orange", verticalAlign:"baseline"}}>-Tinkune, Gairigaun, Kathmandu</span></h3>
                <div class="subheading mb-3">Bac. IT</div>
                <div>Web develpement</div>
                <p>Running</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-danger">Inrole 2021</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between ">
              <div class="flex-grow-1">
                <h3 class="mb-0">Little Buddha Acedamy <span style={{fontSize:"1.2rem", color:"orange"}}>-Bhagatpur, Mahendranagar, Kanchanpur</span></h3>
                <div class="subheading mb-3">+2 Science</div>
                <p>Average GPA:2.96 </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-danger">Pass -out 2020</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Sunlight Public School<span style={{fontSize:"1.2rem", color:"orange"}}> -Krishnapur 02 bani Kanchanpur</span></h3>
                <div class="subheading mb-3">SEE</div>
                <p>Average GPA:3.00 </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-danger">Pass -out 2018</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Education;
