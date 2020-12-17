import React from "react";
import data from "./projects.json";
import "./style.css";

// components
import Navbar from "../../Components/Navbar";

// banners
import ProjectFrame from "../../Banners/ProjectFrame";

const ProjectScreen = () => {
  const projects = data.map((data, index) => (
    <ProjectFrame data={data} index={index} />
  ));

  return (
    <>
      <Navbar />
      <div>
        <input type="text" placeholder="Search..." required />
        <button>S</button>
      </div>
      {projects}
    </>
  );
};

export default ProjectScreen;
