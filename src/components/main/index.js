import React from "react";
import { Box } from "@mui/material";

const drawerWidth = 260;

const Main = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        pt: 8,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        height: "100vh",
        backgroundColor: "#f7f7f7",
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
