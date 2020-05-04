import React, { useState, ChangeEvent } from "react";
import { Exercise } from "../GeneralTypes/GeneralTypes";
import ExerciseList from "./ExerciseList";
import Input from './Input'




interface FilteredListProps {
  list: Exercise[];
  onDelete?: (id: string) => void;
  onAdd?: (id: string) => void;
}

const FilteredList = ({ list, onAdd }: FilteredListProps) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
  };

  const filteredList = list.filter(({ name }) =>
    name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div>
      <Input placeholder="Search..." onChange={handleChange} value={input} />
      <ExerciseList onAdd={onAdd} list={filteredList} />
    </div>
  );
};

export default FilteredList;
