import React from "react";
import Section from "../components/Section";
import useLocalStorage from "../hooks/useLocalStorage";
import { Workout, Exercise } from "../GeneralTypes/GeneralTypes";
import List from "../components/List";
import ExerciseList from "../components/ExerciseList";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import { useWorkoutContext } from "../context/WorkoutContext";

function SavedSchedules() {
  const { schedules, setSchedules } = useWorkoutContext();
  const history = useHistory();

  return (
    <Section>
      <Button variant="primary">Go back to Workout</Button>
      <List>
        {schedules.map(({ exercises }) => (
          <ExerciseList list={exercises} />
        ))}
      </List>
    </Section>
  );
}

export default SavedSchedules;
