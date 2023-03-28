import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HistoricalChart } from "./config/api";
import { CryptoState } from "./CryptoContext";
import { Line } from "react-chartjs-2";

const CoinInfo = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState();
  // const [days, setDays] = useState(1);
  let days = 1; //temporary

  const { currency } = CryptoState();

  const fetchHistoricaldata = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

    setHistoricalData(data.prices);
  };

  console.log("data", historicalData);

  useEffect(() => {
    fetchHistoricaldata();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, days]);

  console.log("data", historicalData);

  const MyContainer = styled("container")(({ theme }) => ({
    width: "75%",
    display: "flex",
    flexdirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    padding: 40,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: 0,
      padding: 20,
      paddingTop: 0,
    },
  }));

  return (
    <MyContainer>
      {!historicalData ? (
        <CircularProgress style={{ color: "gold" }} size={250} thickness={1} />
      ) : (
        <Line
          data={{
            labels: historicalData.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;

              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicalData.map((coin) => coin[1]),
                label: "",
              },
            ],
          }}
        />
      )}
    </MyContainer>
  );
};

export default CoinInfo;
