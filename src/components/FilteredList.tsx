import React, { useState, ChangeEvent } from "react";
import { Exercise } from "../GeneralTypes/GeneralTypes";
import ExerciseList from "./ExerciseList";

interface FilteredListProps {
  list: Exercise[];
}

const FilteredList = ({ list }: FilteredListProps) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInput(value);
  };

  const filteredList = list.filter(({ name }) =>
    name.toLowerCase().includes(input)
  );

  return (
    <>
      <input onChange={handleChange} value={input} />
      <ExerciseList list={filteredList} />
    </>
  );
};

export default FilteredList;