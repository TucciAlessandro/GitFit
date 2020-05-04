import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Navbar from "./components/Navbar";
import Workout from "./screens/Workout";
import SavedWorkouts from "./screens/SavedWorkouts";
import styled from "styled-components";
import { MyThemeContextProvider } from "./context/ThemeContext";

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
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/workout" component={Workout} />
          <Route exact path="/history" component={SavedWorkouts} />
        </Switch>
      </AppContainer>
    </MyThemeContextProvider>
  );
}

export default App;
