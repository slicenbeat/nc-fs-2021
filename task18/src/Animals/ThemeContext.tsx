import React from "react";
import { ITheme } from "./ThemeContextState";

export const contextDefaultValues: ITheme = {
  light: {
    background: "white",
    color: "black"
  },
  dark: {
    background: "black",
    color: "white"
  },
};
export const ThemeContext = React.createContext(contextDefaultValues);
