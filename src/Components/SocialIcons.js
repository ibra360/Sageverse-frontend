import React from "react";
import IMAGE from "../Assets/IMAGE.png";
import IMAGE2 from "../Assets/IMAGE2.png";

import IMAGE3 from "../Assets/IMAGE3.png";

export default function SocialIcons() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "130px",
      }}
    >
      <img src={IMAGE} alt="Sageverse Logo" />{" "}
      <img src={IMAGE2} alt="Sageverse Logo" />{" "}
      <img src={IMAGE3} alt="Sageverse Logo" />
    </div>
  );
}
