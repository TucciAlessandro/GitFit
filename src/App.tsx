import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Navbar from "./components/Navbar";
import CreateWorkout from "./screens/CreateWorkout";
import SavedWorkouts from "./screens/SavedSchedules";
import styled from "styled-components";
import { MyThemeContextProvider } from "./context/ThemeContext";
import { WorkoutContextProvider } from "./context/WorkoutContext";

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;

  overflow: auto;
`;

function App() {
  return (
    <MyThemeContextProvider>
      <WorkoutContextProvider>
        <AppContainer>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/createworkout" component={CreateWorkout} />
            <Route
              exact
              path="/createschedule"
              component={() => <div>not done yet go away nerd</div>}
            />
            <Route exact path="/history" component={SavedWorkouts} />
          </Switch>
        </AppContainer>
      </WorkoutContextProvider>
    </MyThemeContextProvider>
  );
}

export default App;
