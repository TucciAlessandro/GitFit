import React from "react";
import { Exercise } from "../GeneralTypes/GeneralTypes";

interface ExerciseListProps {
  list: Exercise[];
  handleDelete: (id: string) => void;
}

const ExerciseList = ({ list, handleDelete }: ExerciseListProps) => (
  <ul>
    {list.map(({ id, name }) => (
      <>
        <li key={id}>{name} </li>
        <button onClick={() => handleDelete(id)}>X</button>
      </>
    ))}
  </ul>
);

export default ExerciseList;
