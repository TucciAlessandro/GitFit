import React, { useState } from "react";
import Section from "../components/Section";
import styled from "styled-components";
import ExerciseList from "../components/ExerciseList";
import { v4 as uuidv4 } from "uuid";
import { Exercise, Schedule } from "../GeneralTypes/GeneralTypes";
import FilteredList from "../components/FilteredList";
import useLocalStorage from "../hooks/useLocalStorage";
import AddExercise from "../components/AddExercise";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import { useWorkoutContext } from "../context/WorkoutContext";

const Hr = styled.hr`
  width: 100%;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

function deleteFromList<T>(list: T[], callback: (element: T) => boolean) {
  return list.filter(callback);
}

function deleteExerciseFromList(list: Exercise[], idToDelete: string) {
  return deleteFromList(list, ({ id }) => id !== idToDelete);
}

const Workout = () => {
  const {
    exercises,
    setExercises,
    history,
    setHistory,
    schedules,
    setSchedules,
  } = useWorkoutContext();

  const [schedule, setSchedule] = useState<Schedule>({
    exercises: [],
    name: "",
    id: uuidv4(),
  });

  const routerHistory = useHistory();

  const saveSchedule = () => {
    setSchedules((oldSchedules: Schedule[]) => [...oldSchedules, schedule]);
    routerHistory.push("/history");
  };

  const onSubmit = (exercise: Exercise) => {
    setExercises((oldList: Exercise[]) => [...oldList, exercise]);
  };

  const deleteExercise = (id: string) => {
    setExercises(deleteExerciseFromList(exercises, id));
  };

  const addExerciseToSchedule = (id: string) => {
    const exerciseToAdd = exercises.find((ex) => ex.id === id);

    if (exerciseToAdd) {
      deleteExercise(id);
      setSchedule((oldSchedule) => ({
        ...oldSchedule,
        exercises: [...oldSchedule.exercises, exerciseToAdd],
      }));
    }
  };

  return (
    <Section>
      <AddExercise onSubmit={onSubmit} />
      <Hr />
      <Row>
        <FilteredList
          onAdd={addExerciseToSchedule}
          onDelete={deleteExercise}
          list={exercises}
        />
        <div>
          Work
          <Button variant="danger" onClick={saveSchedule}>
            Save this schedule!
          </Button>
          <h4>MY SCHEDULE</h4>
          <ExerciseList list={schedule.exercises} />
        </div>
      </Row>
    </Section>
  );
};

export default Workout;
