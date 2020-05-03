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

  const onSubmit = (exercise: Exercise) => {
    setList((oldList: Exercise[]) => [...oldList, exercise]);
  };

  const deleteExercise = (id: string) => {
    setList(deleteExerciseFromList(list, id));
  };

  return (
    <Section>
      <AddExercise onSubmit={onSubmit} />
      <Hr />
      <FilteredList handleDelete={deleteExercise} list={list} />
    </Section>
  );
};

export default Workout;
