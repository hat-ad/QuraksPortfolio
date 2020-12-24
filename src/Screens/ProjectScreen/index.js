import React from "react";
import data from "./projects.json";
import "./style.css";

// components
import Navbar from "../../Components/Navbar";

// banners
import ProjectFrame from "../../Banners/ProjectFrame";

// svgs
import Logo from "../../Assets/Svg/LOGO.svg";

const ProjectScreen = () => {
  const projects = data.map((data, index) => (
    <ProjectFrame key={index} data={data} index={index} />
  ));

  return (
    <>
      <Navbar />
      <div
        className="gallery-top-banner"
        style={{
          background: `url(${
            require("../../Assets/images/gallery_bg.jpg").default
          })`,
        }}
      >
        <img src={Logo} alt="logo" loading="lazy" />
      </div>
      {projects}
    </>
  );
};

export default ProjectScreen;
