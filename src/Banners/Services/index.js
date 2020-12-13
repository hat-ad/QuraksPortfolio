import React from "react";
import "./style.css";

export default function Services() {
  return (
    <div className="services">
      <div className="services-txt">
        <p className="services-header">Our Services</p>
        <p className="services-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis
          sagittis varius nec tempus facilisis accumsan dui. Aliquam non nibh
          nunc morbi ac, sagittis. Eget eu, aliquet sit mattis sed. Eu
          adipiscing eget est morbi etiam id donec. Scelerisque consequat semper
          aliquet imperdiet est quis adipiscing. Eu et aenean consectetur
          cursus. Lectus habitant in commodo, vulputate mi ornare varius. Amet
          tempus consectetur nam posuere tempor. Erat sit eu non sem ultrices
          vulputate iaculis rhoncus tempus. Faucibus massa dictum velit porta
          sed ullamcorper. Odio duis nunc venenatis eu. Suspendisse risus,
          integer sed suspendisse ut in. Risus, nunc, vivamus sit posuere cursus
          diam massa. Ac, lorem odio ut amet at.
        </p>
      </div>
      <div className="services-img">
        <img
          src={require("../../Assets/images/services.png").default}
          alt="services-banner"
        />
      </div>
    </div>
  );
}
