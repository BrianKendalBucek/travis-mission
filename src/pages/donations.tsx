import React from "react";
// import MissionStatement from "@/components/about/MissionStatement";
// import CommunityInvolvement from "@/components/about/CommunityInvolvement";
// import LeadershipTeam from "@/components/about/LeadershipTeam";
import Hero from "@/components/home/Hero";

export default function Donations() {
  // FIX .env
  const heroTitle = "Donations";
  const heroBackgroundImage = "/jungle.jpg";

  return (
    <div className="about-us">
      <Hero
        title={heroTitle}
        backgroundImage={heroBackgroundImage}
      />
      <div className="about-space">
        <div className="donations"></div>
        {/* <MissionStatement /> */}
        {/* <div className="baptism"></div> */}
        {/* <CommunityInvolvement /> */}
        {/* <div className="community"></div> */}
        {/* <LeadershipTeam /> */}
      </div>
    </div>
  );
}
