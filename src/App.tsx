import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Navbar from "./components/Navbar";
import Workout from "./screens/Workout";
import styled from "styled-components";
import {
  MyThemeContextProvider,
} from "./context/ThemeContext";

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;

  overflow: auto;
`;
const Hr = styled.hr`
  width: 100%;
`;


function App() {
  return (
    <MyThemeContextProvider>
      <AppContainer>
        <Navbar />
        <Hr />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/workout" component={Workout} />
        </Switch>
      </AppContainer>
    </MyThemeContextProvider>
  );
}

export default App;
