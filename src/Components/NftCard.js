import React from 'react';
import { Box, Paper, Grid } from '@mui/material';
import SilverNft from '../Assets/silverNft.png';
import GoldenNft from '../Assets/goldenNft.png';

import GreenNft from '../Assets/GreenNft.png';

import BlueNft from '../Assets/BlueNft.png';
import RedNft from '../Assets/RedNft.png';

export default function NftCard() {
  const NftArray = [SilverNft, GoldenNft, GreenNft, BlueNft, RedNft];
  return (
    <>
      {NftArray.map(data => {
        return (
          <Box
            sx={{ flexGrow: 1 }}
            className="main-nft-box"
            style={{
              padding: '5%',
              position: 'relative',
            }}>
            <div
              style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,0.9)',
              }}
            />
            <Grid
              container
              spacing={2}
              // direction="column"
              // alignItems="center"
              // justifyContent="center"
              style={{
                position: 'relative',
                zIndex: 999,
              }}>
              <Grid
                item
                xs={12}
                md={5}
                spacing={2}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <img src={data} width="70%" />
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
                }>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    //   justifyContent: "left",
                    //   alignItems: "center",
                    position: 'relative',
                    zIndex: 999,
                    color: 'white',
                  }}>
                  <h2 className="newFont">NFT MINT SECTION</h2>
                  <p>
                    Loirm ipsam is a collection of 10,000 unique, randomly
                    generated wild boars roaming on the Ethereum blockchain as
                    ERC-721 NFTs.
                  </p>
                  <p>
                    {' '}
                    Every Angry Boar is unique and programmatically generated
                    from over 250+ possible attributes and traits like
                    background, skin, clothes, mouth, head, tusks, snout, eyes
                    and more. Some boars are rarer than others.
                  </p>
                  <div
                    style={{
                      display: 'flex',

                      alignItems: 'center',
                    }}>
                    <p>Price:</p>{' '}
                    <p
                      style={{
                        fontFamily: 'Space Ranger',
                        marginLeft: 10,
                        fontSize: 24,
                      }}>
                      29.00 ETH
                    </p>
                  </div>
                  <div
                    style={{
                      display: 'flex',

                      alignItems: 'center',
                    }}>
                    <p>Date:</p>{' '}
                    <p
                      style={{
                        fontFamily: 'Space Ranger',
                        marginLeft: 10,
                        fontSize: 24,
                      }}>
                      29.12.2023
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </>
  );
}
