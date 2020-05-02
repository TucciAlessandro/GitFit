import React from "react";
import { Exercise } from "../GeneralTypes/GeneralTypes";

interface ExerciseListProps {
  list: Exercise[];
}

const ExerciseList = ({ list }: ExerciseListProps) => (
  <ul>
    {list.map(({ id, name }) => (
      <li key={id}>{name} </li>
    ))}
  </ul>
);

export default ExerciseList;
