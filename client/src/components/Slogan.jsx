import React from "react";

const CompanyHeader = () => {
  return (
    <div className="h-auto py-40 text-white   md:h-screen md:px-12 shadow-lg items-center flex bg-gradient-to-r from-blue-800 to-pink-800">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-8xl font-bold leading-tight">
          DAG TECHNOLOGIES
        </h1>
        <p className="text-4xl font-bold md:text-6xl mt-2">
          Your <span className="text-yellow-300">Tech</span>, Our{" "}
          <span className="text-yellow-300">Expertise</span>
        </p>
      </div>
    </div>
  );
};

export default CompanyHeader;
