import React from "react";
import bgImage from "../Assets/bgImage.jpg";
import NftCard from "../Components/NftCard";
import SocialIcons from "../Components/SocialIcons";
import TopNavbar from "../Components/TopNavbar";
import SilverNft from "../Assets/silverNft.png";
import GoldenNft from "../Assets/goldenNft.png";

import GreenNft from "../Assets/GreenNft.png";

import BlueNft from "../Assets/BlueNft.png";
import RedNft from "../Assets/RedNft.png";
import { useState } from "react";
function Landing() {
  const [step, setStep] = useState(1);
  const [nftImage, setNftImage] = useState();
  const [nftIndex, setNftIndex] = useState();

  const NftArray = [
    {
      image: SilverNft,
      heading: "SageVerse Murim Order: White Jade collection",
      description:
        "Ten thousand white jade “Murim” tokens marked for the “Outer court disciples” of the SageVerse “Murim Order”",
      price: "90 MATIC",
    },
    {
      image: GoldenNft,
      heading: "SageVerse Murim Order: Yellow Jade collection",
      description:
        "Eight thousand yellow jade “Murim” tokens marked for the “Inner court disciples” of the SageVerse “Murim Order”",
      price: "180 MATIC",
    },
    {
      image: GreenNft,
      heading: "SageVerse Murim Order: Green Jade collection",
      description:
        "Five thousand green jade “Murim” tokens marked for the “Core disciples” of the SageVerse “Murim Order”",
      price: "360 MATIC",
    },
    {
      image: BlueNft,
      heading: "SageVerse Murim Order: Blue Jade collection",
      description:
        "Two thousand and five hundred blue jade “Murim” tokens marked for “Outer court elders” of the SageVerse “Murim Order”",
      price: "720 MATIC",
    },
    {
      image: RedNft,
      heading: "SageVerse Murim Order: Blood Jade collection",
      description:
        "One thousand and five hundred blood jade “Murim” tokens marker for the “Inner court elders” of the SageVerse “Murim Order”",
      price: "1440 MATIC",
    },
  ];

  return (
    <div>
      {step === 1 ? (
        <>
          <img src={bgImage} alt="bgImage" style={{ width: "100%" }} />
          <TopNavbar />
          {NftArray.map((data, index) => {
            return (
              <NftCard
                nftImage={data.image}
                nftHeading={data.heading}
                nftDescription={data.description}
                setStep={setStep}
                step={step}
                setNftImage={setNftImage}
                setNftIndex={setNftIndex}
                nftIndex={index}
                nftPrice={data.price}
              />
            );
          })}
        </>
      ) : (
        <NftCard
          nftImage={NftArray[nftIndex].image}
          nftHeading={NftArray[nftIndex].heading}
          nftDescription={NftArray[nftIndex].description}
          nftData={NftArray}
          setStep={setStep}
          step={step}
          nftPrice={NftArray[nftIndex].price}
          setNftImage={setNftImage}
        />
      )}
    </div>
  );
}

export default Landing;
