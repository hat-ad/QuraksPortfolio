/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";

function AboutUs() {
  return (
    <div>
      <div className="aboutus" id="about_us">
        <h2 className="about-us-heading">About Us</h2>
        <hr className="about-us-hr" />
        <p className="about-us-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis sagittis varius nec tempus
        facilisis
        accumsan dui. Aliquam non nibh nunc morbi ac, sagittis. Eget eu, aliquet sit mattis sed. Eu
        adipiscing
        eget est morbi etiam id donec. Scelerisque consequat semper aliquet imperdiet est quis adipiscing.
                    </p>
        <div className="about-us-container">
          <div className="about-us-card">
            <div>
              <img src={require("../../Assets/Svg/undraw_male_avatar_323b.svg").default} />
              <h2 className="card-head">Souvik Bhattacharyya</h2>
              <h5 className="card-head-catagory">Designer</h5>
              <p className="card-head-details">
                Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna
                aliqua.
                                </p>
            </div>
            </div>
            <div className="about-us-card">
              <div>
              <img src={require("../../Assets/Svg/undraw_male_avatar_323b.svg").default} />
                <h2 className="card-head2">Subho Basak</h2>
                <h5 className="card-head-catagory">Designer</h5>
                
                <p className="card-head-details">
                  Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna
                  aliqua.
                                </p>

              </div>
            </div>
            <div className="about-us-card">
              <div>
              <img src={require("../../Assets/Svg/undraw_male_avatar_323b.svg").default} />
                <h2 className="card-head2">Ashis Kr Das</h2>
                <h5 className="card-head-catagory">Designer</h5>
                <p className="card-head-details">
                  Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna
                  aliqua.
                                </p>
              </div>
            </div>
          </div>
      </div>
      <div className="gallery">
        <h2 className="gallery-heading">Our Projects</h2>
        <hr className="gallery-hr" />
        <img
          src={require("../../Assets/Svg/Carosel.svg").default}
          alt="aboutus-banner"
        />
      </div>
    </div>
  );
}

export default AboutUs;
