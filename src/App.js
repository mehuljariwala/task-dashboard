import React from "react";
import { CssBaseline } from "@mui/material";
import Layout from "./containers/Layout";
// import { createTheme } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./redux/store";

const theme = createTheme({
  typography: {
    fontFamily: "unset",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          borderRadius: 30,
          boxShadow: "0 1px 2px 1px #00000026",
          backgroundColor: "#0071dd",
        },
        outlinedPrimary: {
          background: "#fff",
          boxShadow: "inset 0 0 0 0.0625rem #000",
          color: "#000",
          fontWeight: 700,
          borderRadius: 30,
          border: 0,
        },
      },
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
