import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../CoinInfo";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { styled } from "@mui/material/styles";
import { LinearProgress, Typography } from "@mui/material";
import { numberWithCommas } from "../components/Banner/Carousel";

const MyContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Sidebar = styled("div")(({ theme }) => ({
  width: "30%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 25,
  borderRight: "2px solid gray",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: 20,
  marginRight: 10,
  fontFamily: "Montserrat",
}));

const Description = styled(Typography)(({ theme }) => ({
  width: "100%",
  fontFamily: "Montserrat",
  padding: 25,
  paddingBottom: 15,
  paddingTop: 0,
  textAlign: "justify",
}));

const MarketData = styled(Typography)(({ theme }) => ({
  alignSelf: "start",
  padding: 25,
  paddingTop: 10,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifycontent: "space-around",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("xs")]: {
    alignItems: "start",
  },
}));

const DataValue = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat",
}));

const Coinpage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let des = coin?.description.en.split(". ")[0];

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <MyContainer>
      <Sidebar>
        {/* sidebar */}
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Heading variant="h3">{coin?.name}</Heading>
        <Description
          variant="subtitle1"
          dangerouslySetInnerHTML={{ __html: des }}
        />
        <MarketData>
          <span style={{ display: "flex" }}>
            <Heading variant="h5">Rank:</Heading>
            &nbsp; &nbsp;
            <DataValue variant="h5">{coin?.market_cap_rank}</DataValue>
          </span>
          <span style={{ display: "flex" }}>
            <Heading variant="h5">Current Price:</Heading>
            &nbsp; &nbsp;
            <DataValue variant="h5">
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </DataValue>
          </span>
          <span style={{ display: "flex" }}>
            <Heading variant="h5">Market Cap:</Heading>
            &nbsp; &nbsp;
            <DataValue variant="h5">
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}M
            </DataValue>
          </span>
        </MarketData>
      </Sidebar>
      {/* chart */}
      <CoinInfo />
    </MyContainer>
  );
};

export default Coinpage;
