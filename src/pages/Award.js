import React from "react";
import Header from "../components/Header";

const Award = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-3 clip">Contact Me</h2>
              <h3><i class="fa fa-phone" aria-hidden="true"></i> Phone</h3>  
                <a href="tel:9869504717" className="text-5" style={{textDecoration:"none", fontSize:"1.2rem",}}>9869504717</a>
                <h3><i class="fa fa-envelope" aria-hidden="true"></i> Email</h3>
                <a href="mailto:rokayasuresh028@gmail.com?Subject=Hire me &body=hire me" style={{textDecoration:"none", fontSize:"1.2rem"}}>rokayasuresh028@gmail.com</a>

                <h3 className="social-icon"> <i class="fa fa-location-arrow" aria-hidden="true"></i>
 Address</h3>
                <p style={{textDecoration:"none", fontSize:"1.2rem" }} className="text-danger">Koteshwor, Kathmandu 44600</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Award;
