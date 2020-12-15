import React from "react";

//style
import { Grid } from "@material-ui/core";
import "./style.css";

//icons
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";


export default function Footer() {
  return (
    <div className="footer-container">
      <Grid container xs={12} md={12} lg={12} sm={12} item>
        <Grid xs={6} md={6} lg={6} sm={6} item>
          <span className="copyright">@ 2021 technology </span>
        </Grid>
        <Grid xs={6} md={6} lg={6} sm={6} item direction="row">
          <span className="social-handle">
            connect with Us{" "}
            <span className="social-cont">
              <a href="/" className="social">
                <InstagramIcon style={{ color: "white" }} />
              </a>
              <a href="/" className="social">
                <FacebookIcon style={{ color: "white" }} />
              </a>
              <a href="/" className="social">
                <TwitterIcon style={{ color: "white" }} />
              </a>
              <a href="/" className="social">
                <LinkedInIcon style={{ color: "white" }} />
              </a>
            </span>
          </span>
        </Grid>
      </Grid>
    </div>
  );
}
