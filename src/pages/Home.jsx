import React from "react";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <div className="home">
        <h3> Introducing an A.I.-Powered Marketplace for Today’s Workforce.</h3>
        <h1>A better way to productize</h1>
        <h1>your skills</h1>
        <p>
          The premier digital marketplace
          <span className="line">
            exclusively for work and job-based content.
          </span>
        </p>
      </div>
    </>
  );
}

export default Home;
