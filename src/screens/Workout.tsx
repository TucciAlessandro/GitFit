import React, { useState, ChangeEvent } from "react";
import Section from "../components/Section";
import styled from "styled-components";
import ExerciseList from "../components/ExerciseList";
import { v4 as uuidv4 } from "uuid";
import { Exercise } from "../GeneralTypes/GeneralTypes";

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
  const [list, setList] = useState<Exercise[]>(exercises);
  const [input, setInput] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInput(value);
  };

  const filteredList = list.filter(({ name }) =>
    name.toLowerCase().includes(input)
  );

  return (
    <Section>
      <div>
        <input onChange={handleChange} value={input} />
        <ExerciseList list={filteredList} />
      </div>
    </Section>
  );
};

export default Workout;
