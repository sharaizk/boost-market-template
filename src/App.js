import React, { useState, useEffect } from "react";
import Header from "components/layout/Header";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "theme";
import Footer from "components/layout/Footer";
import ApexLegends from "pages/ApexLegends";
import axios from "axios";
import { useLocation } from "react-router-dom";
import LOL from "pages/LOL";
const App = () => {
  const [page, setPage] = useState("");
  const location = useLocation();
  useEffect(() => {
    const getPage = async () => {
      try {
        const getPageResponse = await axios.get(
          "https://boost-temp-server.herokuapp.com/api/page",
          {
            params: {
              page: location.pathname.replace("/", ""),
            },
          }
        );
        setPage(getPageResponse.data.page);
      } catch (error) {}
    };
    getPage();
  }, [location.pathname]);

  return (
    <ThemeProvider theme={mainTheme}>
      {page === "apex" && (
        <>
          <Header />
          <ApexLegends />
          <Footer />
        </>
      )}
      {page === "lol" && (
        <>
          <Header />
          <LOL />
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
