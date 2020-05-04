import React, { createContext, ReactNode, useContext } from "react";
import { Workout, Exercise, Schedule } from "../GeneralTypes/GeneralTypes";
import useLocalStorage, { setValueType } from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

interface WorkoutContextProviderProps {
  children: ReactNode;
}

interface WorkoutContextValue {
  history: Workout[];
  setHistory: setValueType<Workout[]>;
  schedules: Schedule[];
  setSchedules: setValueType<Schedule[]>;
  exercises: Exercise[];
  setExercises: setValueType<Exercise[]>;
}

const DEFAULT_CONTEXT_VALUE: WorkoutContextValue = {
  history: [],
  schedules: [],
  exercises: [],
  setHistory: () => {},
  setSchedules: () => {},
  setExercises: () => {},
};

const WorkoutContext = createContext<WorkoutContextValue>(
  DEFAULT_CONTEXT_VALUE
);

const defaultExercises: Exercise[] = [
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

export const useWorkoutContext = () => useContext(WorkoutContext);

export function WorkoutContextProvider({
  children,
}: WorkoutContextProviderProps) {
  const [exercises, setExercises] = useLocalStorage<Exercise[]>(
    "myExercises",
    defaultExercises
  );
  const [schedules, setSchedules] = useLocalStorage<Schedule[]>(
    "mySchedule",
    []
  );
  const [history, setHistory] = useLocalStorage<Workout[]>("myHistory", []);

  const contextValue: WorkoutContextValue = {
    exercises,
    setExercises,
    history,
    setHistory,
    schedules,
    setSchedules,
  };

  return (
    <WorkoutContext.Provider value={contextValue}>
      {children}
    </WorkoutContext.Provider>
  );
}
