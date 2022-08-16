import React from "react";
import Router from "routes/routes";
import Header from "components/layout/Header";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "theme";
import Footer from "components/layout/Footer";
const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Header />
      <Router />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
