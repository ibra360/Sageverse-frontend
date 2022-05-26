import React from "react";
// import SageverseLogo from "../Assets/SageverseLogo.svg";
import SageverseLogo from "../Assets/logo.png";
import SocialIcons from "./SocialIcons";
//
export default function Navbar() {
  return (
    <div className="bottomNavbarBox">
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
        <p>© 2022 Sageverse - All Rights Reserved</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          style={{ color: "white", textDecoration: "none", margin: "0px 20px" }}
          target="_blank"
          href="https://www.fiverr.com/fahadproo"
        >
          <p>Design & developed by fahad</p>
        </a>
        <SocialIcons />
      </div>
    </div>
  );
}
