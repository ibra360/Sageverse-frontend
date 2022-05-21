import React from "react";
// import SageverseLogo from "../Assets/SageverseLogo.svg";
import SageverseLogo from "../Assets/logo.png";
import SocialIcons from "./SocialIcons";
//
export default function Navbar() {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "#1F1F1F",
        padding: "4px 15%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={SageverseLogo}
          alt="Sageverse Logo"
          style={{ marginRight: "15px" }}
        />
        <p>© 2021 Uniquely scale installed base paradigms</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SocialIcons />
      </div>
    </div>
  );
}
