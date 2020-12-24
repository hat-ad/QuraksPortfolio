import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

//style
import "./style.css";

//icons
import Logo from "../../Assets/Svg/LOGO.svg";
import Home from "../../Assets/Svg/home.svg";
import About from "../../Assets/Svg/About.svg";
import Contact from "../../Assets/Svg/Contact.svg";
import Gallery from "../../Assets/Svg/Gallery.svg";

export default function NavBar() {
  const [navBackground, setNavBackground] = useState(false);

  const _handleScroll = () => {
    if (window.scrollY >= 80) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };
  window.addEventListener("scroll", _handleScroll);
  return (
    <>
      <div className={navBackground ? "container-nav scroll" : "container-nav"}>
        <nav className="nav">
          <div className="nav-brand">
            <Link to="/" title="Project gallery" className="brand">
              <img src={Logo} alt="" loading="lazy" />
            </Link>
          </div>
          <div className="nav">
            <ul className="nav-list">
              <li>
                <NavLink activeClassName="active-link" to="#home">
                  <img src={Home} alt="" loading="lazy" />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active-link" to="#about_us">
                  <img src={About} alt="about" />
                  <span>About Us</span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active-link" to="/projects/">
                  <img src={Gallery} alt="gallery" />
                  <span>Gallery</span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active-link" to="#contact_us">
                  <img src={Contact} alt="contact" />
                  <span>Contact Us</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
