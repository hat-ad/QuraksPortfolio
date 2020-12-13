import React from "react";
import "./style.css";

export default function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-us-form">
        <p>Contact Us</p>
        <div className="contact-us-input">
          <label for="contact-us-input-name">Name</label>
          <input
            id="contact-us-input-name"
            type="text"
            maxLength="200"
            required
          />
        </div>
        <div className="contact-us-input">
          <label for="contact-us-input-email">Email</label>
          <input id="contact-us-input-email" type="email" required />
        </div>
        <div className="contact-us-input">
          <label for="contact-us-input-message">Enter your message here</label>
          <textarea name="message" rows="5" />
        </div>
        <div className="contact-us-submit">
          <button>Submit</button>
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
