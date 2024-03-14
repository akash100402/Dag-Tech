import React from "react";

const CompanyHeader = () => {
  return (
    <div className="bg-gray-200 text-black py-6 px-4 rounded-lg mb-4 md:px-8">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-6xl font-bold ">DAG TECHNOLOGIES</h1>
        <p className="text-lg md:text-3xl mt-2">
          Your Tech, <span className="text-violet-600">Our Expertise</span>
        </p>
      </div>
    </div>
  );
};

export default CompanyHeader;
