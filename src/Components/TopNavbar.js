import React from "react";
import SocialIcons from "./SocialIcons";
import SageverseLogo from "../Assets/logo.png";
import Button from "@mui/material/Button";

export default function TopNavbar() {
  return (
    <div
      style={{
        height: "90px",
        backgroundColor: "black",
        paddingTop: "30px",
        marginTop: "-10px",

        padding: "4px 15%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={SageverseLogo} alt="Sageverse Logo" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "40%",
        }}
      >
        <SocialIcons />
        <Button
          variant="contained"
          style={{
            backgroundColor: "#FFBF00",
            color: "black",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Whitepaper
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#FF432C",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Mint Now
        </Button>
      </div>
    </div>
  );
}
