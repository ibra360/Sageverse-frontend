import React from "react";
import IMAGE from "../Assets/IMAGE.png";
import IMAGE2 from "../Assets/IMAGE2.png";

import IMAGE3 from "../Assets/IMAGE3.png";
import IMAGE4 from "../Assets/tiktok.png";

import IMAGE5 from "../Assets/insta.png";

export default function SocialIcons() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        // width: "130px",
      }}
    >
      <a href=" https://twitter.com/S18654745" target="_blank">
        <img src={IMAGE} alt="Sageverse Logo" style={{ margin: "4px", width:"" }} />{" "}
      </a>
      <a href="https://discord.gg/dxCaJ8tpXZ" target="_blank">
        <img src={IMAGE2} alt="Sageverse Logo" style={{ margin: "4px" }} />{" "}
      </a>
      <a href="https://discord.gg/dxCaJ8tpXZ" target="_blank">
        <img src={IMAGE3} alt="Sageverse Logo" style={{ margin: "4px" }} />{" "}
      </a>
      <a href=" TikTok.com/@sageverse_nft" target="_blank">
        <img src={IMAGE4} alt="Sageverse Logo" style={{ margin: "4px" }} />{" "}
      </a>
      <a href=" Www.Instagram.com/SageVerse_nft" target="_blank">
        <img src={IMAGE5} alt="Sageverse Logo" style={{ margin: "4px" }} />{" "}
      </a>
    </div>
  );
}
