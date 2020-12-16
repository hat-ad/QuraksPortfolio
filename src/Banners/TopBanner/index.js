import React from "react";

//component
import NavBar from "../../Components/Navbar/index";

//svg
import Banner from "../../Assets/Svg/top Banner.svg";

//styles
import "./style.css";
import { Grid } from "@material-ui/core";

function index() {
  return (
    <>
      <div className="container" id="home">
        <NavBar />
        <Grid container xs={12} justify="center" alignItems="center" item>
          <Grid item lg={6} sm={6}>
            <div className="banner-img-container">
              <img src={Banner} alt="Banner" className="banner-img" />
            </div>
          </Grid>
          <Grid item lg={6} sm={6}>
            <div className="banner-text-container">
              <span className="banner-title">Quarks Technology</span>
              <ul>
                <li className="banner-text">lorem ipsum</li>
                <li className="banner-text">lorem ipsum</li>
                <li className="banner-text">lorem ipsum</li>
              </ul>
            </div>
          </Grid>
        </Grid>
        {/* <div className="sub-container">
          <div className="banner">
            
          </div>
          <div className="info">
           
          </div>
        </div> */}
      </div>
    </>
  );
}

export default index;
