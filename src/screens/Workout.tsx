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

const Workout = () => {
  const [list, setList] = useLocalStorage<Exercise[]>("myExercises", exercises);

  const onSubmit = (exercise: Exercise) => {
    setList((oldList: Exercise[]) => [...oldList, exercise]);
  };

  return (
    <Section>
      <AddExercise onSubmit={onSubmit} />
      <hr />
      <FilteredList list={list} />
    </Section>
  );
};

export default Workout;
