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
        <Grid container xs={12} lg={12} sm={12} md={12} justify="center" alignItems="center" item>
          <Grid item lg={6} sm={6} md={6} xs={6}>
            <div className="banner-img-container">
              <img src={Banner} alt="Banner" className="banner-img" />
            </div>
          </Grid>
          <Grid item lg={6} sm={6}  md={6} xs={6}>
            <div className="banner-text-container">
              <span className="banner-title">Quarks Technology</span>
              <ul className="banner-text-ul">
                <li className="banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                <li className="banner-text">Sit amet consectetur adipiscing elit. Tincidunt dui ut</li>
                <li className="banner-text">Commodo nulla facilisi nullam vehicula ipsum a. </li>
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
