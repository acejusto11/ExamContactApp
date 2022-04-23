import React from "react";
import RouterProvider from "./RouterProvider";
import { MuiThemeProvider as ThemeProvider } from "./ThemeProvider";

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <RouterProvider>{children}</RouterProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
