import React, { useState, useEffect } from "react";
import image1 from "../assets/service.png";
import image2 from "../assets/project.png";
import image3 from "../assets/medal.png";

const NumberIncreaser = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [achievements, setAchievements] = useState(0);

  const targetClients = 150;
  const targetProjects = 200;
  const targetAchievements = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      if (clients < targetClients) {
        setClients(
          (prevClients) =>
            prevClients + Math.ceil((targetClients - prevClients) / 500)
        );
      }
      if (projects < targetProjects) {
        setProjects(
          (prevProjects) =>
            prevProjects + Math.ceil((targetProjects - prevProjects) / 500)
        );
      }
      if (achievements < targetAchievements) {
        setAchievements(
          (prevAchievements) =>
            prevAchievements +
            Math.ceil((targetAchievements - prevAchievements) / 500)
        );
      }
    }, 10);

    return () => clearInterval(interval);
  }, [
    clients,
    projects,
    achievements,
    targetClients,
    targetProjects,
    targetAchievements,
  ]);

  return (
    <div className="h-96 md:h-screen flex justify-around items-center ">
      <div className="text-center flex-1">
        <div className="">
          <img
            src={image1}
            className="w-16 mx-auto mb-14 md:w-32 md:mb-20"
            alt="clients-icon"
          />{" "}
          {/* Adjust the size of the icon */}
          <h2 className="text-xl font-semibold mt-12 md:text-5xl">
            <span className="text-lime-500">{clients}+</span> Happy Clients
          </h2>{" "}
          {/* Increase font size */}
        </div>
      </div>
      <div className="text-center flex-1">
        <div className="">
          <img
            src={image2}
            className="w-16 mx-auto mb-14 md:w-32 md:mb-20"
            alt="project-icon"
          />{" "}
          {/* Adjust the size of the icon */}
          <h2 className="text-xl font-semibold mt-12 md:text-5xl">
            <span className="text-lime-500">{projects}+</span> Projects
          </h2>{" "}
          {/* Increase font size */}
        </div>
      </div>
      <div className="text-center flex-1">
        <div className="">
          <img
            src={image3}
            className="w-16 mx-auto mb-14 md:w-32 md:mb-20"
            alt="Achievement-icon"
          />{" "}
          {/* Adjust the size of the icon */}
          <h2 className="text-xl font-semibold mt-12 md:text-5xl">
            <span className="text-lime-500">{achievements}+</span> Achievements
          </h2>{" "}
          {/* Increase font size */}
        </div>
      </div>
    </div>
  );
};

export default NumberIncreaser;
