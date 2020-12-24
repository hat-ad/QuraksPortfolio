import { Repeat } from "@material-ui/icons";
import React from "react";
import "./style.css";

export default function ProjectFrame(props) {
  const zig_zag = (index) => {
    if (index % 2 === 1) {
      return (
        <div className="project-frame-container-body">
          <img src={props.data.image} alt="project" />
          <div>
            <h2 className="project-company-name">{props.data.company}</h2>
            <p className="project-description">
              {props.data.description.length < 500
                ? props.data.description
                : props.data.description.slice(0, 497) + "..."}
            </p>
            <div className="project-date">
              <p>
                <b>Started on: </b>
                <br />
                {props.data.start_date}
              </p>
              <p>
                <b>End on: </b>
                <br />
                {props.data.end_date}
              </p>
            </div>
            <div className="project-btn-container">
              <a href={props.data.link}>
                <button>Visit now |</button>
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="project-frame-container-body">
          <div>
            <h2 className="project-company-name">{props.data.company}</h2>
            <p className="project-description">
              {props.data.description.length < 500
                ? props.data.description
                : props.data.description.slice(0, 497) + "..."}
            </p>
            <div className="project-date">
              <p>
                <b>Started on: </b>
                <br />
                {props.data.start_date}
              </p>
              <p>
                <b>End on: </b>
                <br />
                {props.data.end_date}
              </p>
            </div>
            <div className="project-btn-container">
              <a href={props.data.link}>
                <button>Visit now |</button>
              </a>
            </div>
          </div>
          <img src={props.data.image} alt="project" />
        </div>
      );
    }
  };

  return (
    <>
      <div className="project-frame-header">
        <h1>{props.data.name}</h1>
      </div>
      <div
        className="project-frame-container"
        style={{
          background: `url(${props.data.cover})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {zig_zag(props.index)}
      </div>
    </>
  );
}
