import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-6 lg:px-0 mx-auto bg-blue-200 h-screen">
      <h3 className="text-blue-500 border border-blue-500 px-1 lg:px-2 py-1 text-center rounded-full text-sm lg:text-lg mb-4">
        Introducing an A.I.-Powered Marketplace for Today’s Workforce.
      </h3>
      <h1 className="font-bold text-3xl lg:text-5xl lg:py-4 lg:mt-4 text-center ">
        A better way to productize
      </h1>
      <h1 className="font-bold text-3xl lg:text-5xl lg:py-2 lg:mb-4 text-center">
        your skills
      </h1>
      <p className="text-base lg:text-lg font-semibold mt-4 py-2 text-center">
        The premier digital marketplace
        <span className="underline pl-1">
          exclusively for work and job-based content.
        </span>
      </p>
    </div>
  );
}

export default Home;
