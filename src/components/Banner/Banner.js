import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import BannerImg from "../Banner/banner2.jpg";
import Carousel from "./Carousel";

const styles = {
  banner: {
    backgroundImage: `url(${BannerImg})`,
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  }
};

const Banner = () => {
  return (
    <Paper style={styles.banner}>
      <Container maxWidth={false} style={styles.bannerContent}>
        <div className="tagline" style={styles.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
          variant="subtitle2"
          style={{
            color: "darkgrey",
            textTransform: "capitalize",
            fontFamily: "Montserrat"
          }}>
            Get all the info regarding your favourite Crypto Currency
          </Typography>
        </div>
        <Carousel/>
      </Container>
    </Paper>
  );
};

export default Banner;
