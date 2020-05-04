export interface Exercise {
  name: string;
  id: string;
}

export interface Schedule {
  name: string;
  exercises: Exercise[];
  id: string;
}

export interface Workout {
  schedule: Schedule,
  id: string,
  date: string
}

