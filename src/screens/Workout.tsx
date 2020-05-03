import React, { useState, ChangeEvent } from "react";
import Section from "../components/Section";
import styled from "styled-components";
import ExerciseList from "../components/ExerciseList";
import { v4 as uuidv4 } from "uuid";
import { Exercise } from "../GeneralTypes/GeneralTypes";
import FilteredList from "../components/FilteredList";
import useLocalStorage from "../hooks/useLocalStorage";
import AddExercise from "../components/AddExercise";

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
      <FilteredList
        onAdd={addExerciseToWorkout}
        onDelete={deleteExercise}
        list={list}
      />
      <ExerciseList list={myWorkout} />
    </Section>
  );
};

export default Workout;
