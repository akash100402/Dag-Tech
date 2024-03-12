// AnimationComponent1.js
import React from "react";
import Lottie from "react-lottie";
import animationMission from "../../assets/Animation - 1710091713911.json"; // Replace './animation.json' with the path to your JSON file

function LottieMission() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationMission,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="hidden md:block">
      {" "}
      {/* Hide animation on screens smaller than medium */}
      <div className="w-full md:w-400">
        {" "}
        {/* Set width for animation */}
        <Lottie options={defaultOptions} height={200} width={300} />
      </div>
    </div>
  );
}

export default LottieMission;
