import React, { ReactNode, useState, createContext, useContext } from "react";

import { ThemeProvider, css } from "styled-components";

interface ThemeContextProviderProps {
  children: ReactNode;
}

const lightGradient = css`
  background: #f12711;
  background: -webkit-linear-gradient(to right, #f5af19, #f12711);
  background: linear-gradient(to right, #f5af19, #f12711);
`;

const darkGradient = css`
  background: #373b44;
  background: -webkit-linear-gradient(to bottom, #4286f4, #373b44);
  background: linear-gradient(to bottom, #4286f4, #373b44);
`;

const lightTheme = {
  type: "light",
  gradient: lightGradient,
};

const darkTheme = {
  type: "dark",
  gradient: darkGradient,
};

const DEFAULT_CONTEXT_VALUE = {
  toggleTheme: () => console.log("not in context"),
};

const MyThemeContext = createContext(DEFAULT_CONTEXT_VALUE);
export const useMyThemeContext = () => useContext(MyThemeContext);

export const MyThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () =>
    setTheme((oldTheme) =>
      oldTheme.type === "light" ? darkTheme : lightTheme
    );

  return (
    <MyThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MyThemeContext.Provider>
  );
};
