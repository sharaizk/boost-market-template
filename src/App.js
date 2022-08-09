import React from "react";
import Router from "routes/routes";
import Header from "components/layout/Header";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "theme";
const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
        <Header />
        <Router />
    </ThemeProvider>
  );
};

export default App;
