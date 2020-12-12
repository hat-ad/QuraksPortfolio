import React from "react";

// Banners
import AboutUs from "../../Banners/AboutUs";
import ContactUs from "../../Banners/ContactUs";
import Services from "../../Banners/Services";
import TopBanner from "../../Banners/TopBanner";

const HomeScreen = () => {
  return (
    <>
      <TopBanner />
      <Services />
      <AboutUs />
      <ContactUs />
    </>
  );
};

export default HomeScreen;
