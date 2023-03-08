import React from "react";
import Header from "../components/Header";

const Interest = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-4 clips">Interests</h2>
            <div className="Container_box">
              <div className="Sbucontainer1">
                <h4 className="pb-3"><i class="fa fa-gamepad" aria-hidden="true"></i> Gaming</h4>
                <h4 className="pb-3"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Solving complex problems</h4>
                <h4><i class="fa fa-book" aria-hidden="true"></i> Learning new programming languages</h4>

              </div>
              <div className="Sbucontainer2 px-5">
                <h4 className="pb-3"><i class="fa fa-cutlery" aria-hidden="true"></i> cooking</h4>
                <h4 className="pb-3"><i class="fa fa-music" aria-hidden="true"></i> Music</h4>
                <h4><i class="fa fa-paint-brush" aria-hidden="true"></i> Art and creative activities</h4>

              </div>

            </div>
          
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Interest;
