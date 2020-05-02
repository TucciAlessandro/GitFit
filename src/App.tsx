import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Navbar from "./components/Navbar";
import Workout from "./screens/Workout";

import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;

  overflow: auto;
`

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/workout" component={Workout} />
      </Switch>
    </AppContainer>
  );
}

export default App;
