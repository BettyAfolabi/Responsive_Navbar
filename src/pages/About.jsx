import React from "react";

function About() {
  return (
    <div className="mx-auto flex flex-col justify-center items-center mt-10">
      <h2 className="text-3xl font-bold text-center my-3">About Us</h2>
      <p className="text-xl font-semibold mx-5 lg:text-center py-3">
        <span className="text-blue-400 text-pretty pr-1">
          <a href="https://www.getorganizely.com/">Organizely</a>
        </span>
        is an AI-powered web app that helps people learn and grow in their
        careers. It curates and suggests templates, e-guides, and tutorials on a
        wide range of topics, so people can take control of their own learning
        and skill development.
      </p>
    </div>
  );
}

export default About;
