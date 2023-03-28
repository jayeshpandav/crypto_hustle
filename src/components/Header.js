import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const Header = () => {
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();

  // console.log(currency);

  // const darkTheme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#fff",
  //     },
  //     mode: "dark",
  //   },
  // });

  const styles = {
    title: {
      flex: 1,
      color: "gold",
      fontfamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  };

  return (
    // <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" onClick={() => navigate("/")} style={styles.title}>
              Crypto hunter
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    // </ThemeProvider>
  );
};

export default Header;
