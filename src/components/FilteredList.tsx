import React, { useState, ChangeEvent } from "react";
import { Exercise } from "../GeneralTypes/GeneralTypes";
import ExerciseList from "./ExerciseList";

import styled from "styled-components";

const Input = styled.input`
  border-radius: 3px;
  border: none;
  height: 2rem;
  padding: 1px 3px;
  &:focus {
    outline: none;
  }
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.5);
`;

interface FilteredListProps {
  list: Exercise[];
  handleDelete: (id: string) => void;
}

const FilteredList = ({ list, handleDelete }: FilteredListProps) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
  };

  const filteredList = list.filter(({ name }) =>
    name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <>
      <Input placeholder="Search..." onChange={handleChange} value={input} />
      <ExerciseList handleDelete={handleDelete} list={filteredList} />
    </>
  );
};

export default FilteredList;
