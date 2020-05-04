import React from "react";
import Section from "../components/Section";
import styled from "styled-components";
import ExerciseList from "../components/ExerciseList";
import { v4 as uuidv4 } from "uuid";
import { Exercise } from "../GeneralTypes/GeneralTypes";
import FilteredList from "../components/FilteredList";
import useLocalStorage from "../hooks/useLocalStorage";
import AddExercise from "../components/AddExercise";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";

const exercises: Exercise[] = [
  {
    id: uuidv4(),
    name: "Pull ups",
  },
  {
    id: uuidv4(),
    name: "Push ups",
  },
  {
    id: uuidv4(),
    name: "Squats",
  },
  {
    id: uuidv4(),
    name: "Sit ups",
  },
];

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
  const [list, setList] = useLocalStorage<Exercise[]>("myExercises", exercises);
  const [myWorkout, setMyWorkout] = useLocalStorage<Exercise[]>("myWorkout", [
    {
      id: uuidv4(),
      name: "Sit ups",
    },
  ]);
  const [savedWorkouts, setSavedWorkouts] = useLocalStorage<Exercise[]>(
    "SavedWorkouts",
    []
  );

  const history = useHistory();

  const saveWorkout = () => {
    setSavedWorkouts((oldWorkout: Exercise[]) => myWorkout);
    setMyWorkout((oldWorkout: Exercise[]) => []);
    setList((oldList: Exercise[]) => exercises);
    history.push("/history");
  };
  const onSubmit = (exercise: Exercise) => {
    setList((oldList: Exercise[]) => [...oldList, exercise]);
  };

  const deleteExercise = (id: string) => {
    setList(deleteExerciseFromList(list, id));
  };

  const addExerciseToWorkout = (id: string) => {
    const exerciseToAdd = list.find((ex) => ex.id === id);
    deleteExercise(id);
    setMyWorkout((oldWorkout: Exercise[]) => [...oldWorkout, exerciseToAdd]);
  };

  return (
    <Section>
      <AddExercise onSubmit={onSubmit} />
      <Hr />
      <Row>
        <FilteredList
          onAdd={addExerciseToWorkout}
          onDelete={deleteExercise}
          list={list}
        />
        <div>
          <Button variant="danger" onClick={saveWorkout}>
            Save this schedule!
          </Button>
          <h4>MY WORKOUT</h4>
          <ExerciseList list={myWorkout} />
        </div>
      </Row>
    </Section>
  );
};

export default Workout;
