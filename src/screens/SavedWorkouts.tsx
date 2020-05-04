import React from "react";
import Section from "../components/Section";
import useLocalStorage from "../hooks/useLocalStorage";
import { Workouts } from "../GeneralTypes/GeneralTypes";
import List from "../components/List";
import ExerciseList from "../components/ExerciseList";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
const history = useHistory();

function SavedWorkouts() {
  const [savedWorkouts, SetSavedWorkouts] = useLocalStorage<Workouts[]>(
    "SavedWorkouts",
    []
  );

  const getCurrentDate = (separator = "-") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${date}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${year}`;
  };

  const redirect = () => {
    history.push("/workout");
  };
  
  return (
    <Section>
      <Button variant="primary" onClick={redirect}>
        Go back to Workouts
      </Button>
      <List>
        <h2>Workout saved on {getCurrentDate()}</h2>
        <ExerciseList list={savedWorkouts} />
      </List>
    </Section>
  );
}

export default SavedWorkouts;
