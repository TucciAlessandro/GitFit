import React, { useState, ChangeEvent } from "react";
import { Exercise } from "../GeneralTypes/GeneralTypes";
import { v4 as uuidv4 } from "uuid";

interface AddExerciseProps {
  onSubmit: (exercise: Exercise) => void;
}

function AddExercise({ onSubmit }: AddExerciseProps) {
  const [isAdding, setIsAdding] = useState(true);
  const [input, setInput] = useState("");

  const toggleIsAdding = () => setIsAdding((old) => !old);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
  };

  const handleSubmit = () => {
    toggleIsAdding();
    const newExercise: Exercise = { name: input, id: uuidv4() };
    onSubmit(newExercise);
    setInput("");
  };

  return isAdding ? (
    <button onClick={toggleIsAdding}>Add new exercise!</button>
  ) : (
    <>
      <button onClick={toggleIsAdding}>TAKE ME BACK</button>
      <button onClick={handleSubmit}>GO AHEAD</button>
      <input value={input} onChange={handleChange} />
    </>
  );
}

export default AddExercise;
