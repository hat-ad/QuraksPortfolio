import React from "react";
import data from "./projects.json";
import "./style.css";

// banners
import ProjectFrame from "../../Banners/ProjectFrame";

const ProjectScreen = () => {
  const projects = data.map((data, index) => (
    <ProjectFrame data={data} index={index} />
  ));

  return (
    <>
      <div>
        <input type="text" placeholder="Search..." required />
        <button>S</button>
      </div>
      {projects}
    </>
  );
};

export default ProjectScreen;
