import React from "react";
import "./style.css";

export default function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-us-form">
        <h1>Contact Us</h1>
        <div className="input-box">
          <input type="text" required="required" id="contact-us-input-name"/>
          <span>Full Name</span>
        </div>
        <div className="input-box">
          <input type="text" required="required" id="contact-us-input-email"/>
          <span>Email Address</span>
        </div>
        <div className="input-box">
          <textarea cols="30" rows="5" type="text" required="required" id="contact-us-input-massage"/>
          <span>Write Your Message</span>
        </div>
        <div className="contact-us-submit">
          <input type="submit" value="Submit"/>
        </div>
      </div>
      <div className="contact-us-banner">
        <img
          src={require("../../Assets/images/contact_us.png").default}
          alt="contact-us-banner"
        />
      </div>
    </div>
  );
}
