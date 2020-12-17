import React from "react";
import "./style.css";

export default function ProjectFrame(props) {
  const zig_zag = (index) => {
    if (index % 2 === 0) {
      return (
        <div className="project-frame-container-body">
          <img src={props.data.image} alt="project" />
          <p>
            {props.data.description.length < 300
              ? props.data.description
              : props.data.description.slice(0, 297) + "..."}
          </p>
        </div>
      );
    } else {
      return (
        <div className="project-frame-container-body">
          <p>
            {props.data.description.length < 300
              ? props.data.description
              : props.data.description.slice(0, 297) + "..."}
          </p>
          <img src={props.data.image} alt="project" />
        </div>
      );
    }
  };

  return (
    <div className="project-frame-container">
      <div className="project-frame-container-cover">
        <img src={props.data.cover} alt="project cover" />
        <a href={props.data.link}>{props.data.name}</a>
      </div>
      {zig_zag(props.index)}
    </div>
  );
}
