import React, { useState, ChangeEvent } from "react";
import { Exercise } from "../GeneralTypes/GeneralTypes";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";

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
    input.trim() !== "" && onSubmit(newExercise);
    setInput("");
  };

  return isAdding ? (
    <Button onClick={toggleIsAdding}>Add new exercise!</Button>
  ) : (
    <>
      <div>
        <Button variant="danger" onClick={toggleIsAdding}>
          TAKE ME BACK
        </Button>
        <Button variant="secondary" onClick={handleSubmit}>
          GO AHEAD
        </Button>
      </div>
      <input
        style={{ marginTop: "5px" }}
        value={input}
        onChange={handleChange}
      />
    </>
  );
}

export default AddExercise;
