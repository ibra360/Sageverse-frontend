import React from "react";
import SocialIcons from "./SocialIcons";
import SageverseLogo from "../Assets/logoHd.png";
import Button from "@mui/material/Button";

export default function TopNavbar() {
  return (
    <div
      className="navbarBox"
      // style={{
      //   height: "90px",
      //   backgroundColor: "black",
      //   paddingTop: "30px",
      //   marginTop: "-10px",

      //   padding: "4px 15%",
      //   display: "flex",
      //   justifyContent: "space-between",
      //   alignItems: "center",
      // }}
    >
      <img src={SageverseLogo} alt="Sageverse Logo" width={"80px"} />
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
            margin: "10px",
            width: "fit-content",
          }}
        >
          <a
            href="https://sageverse.gitbook.io/sageverse/"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            Whitepaper
          </a>
        </Button>
      </div>
    </div>
  );
}
