import React from "react";
import NavBar from "../components/NavBar";

function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="about">
        <h2>About Us</h2>
        <p>
          <span className="span">
            <a href="https://www.getorganizely.com/">Organizely</a>
          </span>
          is an AI-powered web app that helps people learn and grow in their
          careers. It curates and suggests templates, e-guides, and tutorials on
          a wide range of topics, so people can take control of their own
          learning and skill development.
        </p>
      </div>
    </>
  );
}

export default AboutUs;
