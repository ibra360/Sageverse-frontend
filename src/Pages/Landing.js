import React from "react";
import bgImage from "../Assets/bgImage.jpg";
import NftCard from "../Components/NftCard";
import SocialIcons from "../Components/SocialIcons";
import TopNavbar from "../Components/TopNavbar";

function Landing() {
  return (
    <div>
      <img src={bgImage} alt="bgImage" style={{ width: "100%" }} />
      <TopNavbar />
      <NftCard />
      {/* <SocialIcons /> */}
    </div>
  );
}

export default Landing;
