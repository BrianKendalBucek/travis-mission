import React from "react";
// import MissionStatement from "@/components/about/MissionStatement";
// import CommunityInvolvement from "@/components/about/CommunityInvolvement";
// import LeadershipTeam from "@/components/about/LeadershipTeam";
import "../styles/_home.scss";
import "../styles/_about.scss";

import HeroDonations from "@/components/donations/HeroDonations";

export default function Donations() {
  return (
    <div className="about-us">
      <HeroDonations />
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
