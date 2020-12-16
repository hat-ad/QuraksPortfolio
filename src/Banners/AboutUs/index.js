import React from "react";
import "./style.css";

function AboutUs() {
  return (
    <div>
      <div className="services" id="about_us">
        {/* <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis sagittis varius nec tempus
                  facilisis
                  accumsan dui. Aliquam non nibh nunc morbi ac, sagittis. Eget eu, aliquet sit mattis sed. Eu
                  adipiscing
                  eget est morbi etiam id donec. Scelerisque consequat semper aliquet imperdiet est quis adipiscing.
                    </p>
                    <div className="Bx">
                        <div className="serviceBx">
                            <div>
                                <img src="Assets/undraw_male_avatar_323b.svg"/>
                                <h2 className="card-head">Souvik Bhattacharyya</h2>
                                <h5>Designer</h5>
                                <p>
                          Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna
                          aliqua.
                                </p>
                        </div>
                        <div className="serviceBx">
                            <div>
                                <img src="Assets/undraw_male_avatar_323b.svg" />
                                <h2 className="card-head2">Subho Basak</h2>
                                <h5>Designer</h5>
                                <p>
                          Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna
                          aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="serviceBx">
                            <div>
                                <img src="Assets/undraw_male_avatar_323b.svg" />
                                <h2 className="card-head2">Ashis Kr Das</h2>
                                <h5>Designer</h5>
                                <p>
                          Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna
                          aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div> */}
      </div>
      <div className="gallery">
        <h2 className="heading">Our Projects</h2>
        <hr />
        <img
          src={require("../../Assets/Svg/Carosel.svg").default}
          alt="aboutus-banner"
        />
      </div>
    </div>
  );
}

export default AboutUs;
