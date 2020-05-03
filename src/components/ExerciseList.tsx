import React from "react";
import { Exercise } from "../GeneralTypes/GeneralTypes";
import List from "./List";

interface ExerciseListProps {
  list: Exercise[];
  onDelete?: (id: string) => void;
  onAdd?: (id: string) => void;
}

const ExerciseList = ({ list, onDelete, onAdd }: ExerciseListProps) => (
  <List>
    {list.map(({ id, name }) => (
      <>
        <li key={id}>{name} </li>
        {onAdd && <button onClick={() => onAdd(id)}>Add</button>}
        {onDelete && <button onClick={() => onDelete(id)}>X</button>}
      </>
    ))}
  </List>
);

export default ExerciseList;
