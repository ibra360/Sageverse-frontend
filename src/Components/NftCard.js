import React from "react";
import { Box, Paper, Grid, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
export default function NftCard({
  setNftIndex,
  setStep,
  nftImage,
  nftHeading,
  nftDescription,
  step,
  nftIndex,
  nftPrice,
}) {
  console.log(nftImage);
  // let navigate = useNavigate();

  return (
    <Box
      sx={{ flexGrow: 1 }}
      className="main-nft-box"
      style={{
        padding: "5%",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,0.9)",
        }}
      />
      <Grid
        container
        spacing={2}
        // direction="column"
        // alignItems="center"
        // justifyContent="center"
        style={{
          position: "relative",
          zIndex: 999,
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          spacing={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={nftImage} width="70%" />
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          style={
            {
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
            }
          }
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   justifyContent: "left",
              //   alignItems: "center",
              position: "relative",
              zIndex: 999,
              color: "white",
            }}
          >
            <p
              style={{
                fontFamily: "Space Ranger",

                fontSize: 24,
              }}
            >
              {nftHeading}
            </p>
            {/* <p>
              Loirm ipsam is a collection of 10,000 unique, randomly generated
              wild boars roaming on the Ethereum blockchain as ERC-721 NFTs.
            </p> */}
            <p>{nftDescription}</p>
            <div
              style={{
                display: "flex",
                height: "40px",
                alignItems: "center",
              }}
            >
              <p>Price:</p>{" "}
              <p
                style={{
                  fontFamily: "Space Ranger",
                  marginLeft: 10,
                  fontSize: 24,
                }}
              >
                {nftPrice}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                height: "40px",

                alignItems: "center",
              }}
            >
              <p>Date:</p>{" "}
              <p
                style={{
                  fontFamily: "Space Ranger",
                  marginLeft: 10,
                  fontSize: 24,
                }}
              >
                29.12.2023
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",

                alignItems: "center",
              }}
            >
              {step === 2 && (
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "orangered",
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "none",
                    width: "33%",
                    marginTop: "35px",
                    // marginLeft: "40px",
                    marginRight: "40px",
                  }}
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  Cancel
                </Button>
              )}

              <Button
                variant="contained"
                style={{
                  backgroundColor: "white",
                  color: "green",
                  fontWeight: "bold",
                  textTransform: "none",
                  width: "33%",
                  marginTop: "35px",
                }}
                onClick={() => {
                  setStep(2);
                  setNftIndex(nftIndex);
                }}
              >
                Mint
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
