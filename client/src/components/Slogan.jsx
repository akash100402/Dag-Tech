import React from "react";

const CompanyHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-500 text-white py-8 px-6 rounded-lg mb-8 md:px-12 shadow-lg">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          DAG TECHNOLOGIES
        </h1>
        <p className="text-lg md:text-2xl mt-2">
          Your <span className="text-yellow-300">Tech</span>,
          Our <span className="text-yellow-300">Expertise</span>
        </p>
      </div>
    </div>
  );
};

export default CompanyHeader;
