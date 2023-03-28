import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const styles = {
  App: {
    // flex: 1,
    backgroundColor: "#14161a",
    color: "#fff",
    minHeight: "100vh",
  },
};

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div style={styles.App}>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/coins/:id" element={<Coinpage />} exact />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
