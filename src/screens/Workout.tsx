import React from "react";
import Section from "../components/Section";
import styled from "styled-components";

interface Exercise {
  name: string;
  id: string;
}

const exercises: Exercise[] = [
  {
    id: "adsasd",
    name: "adsasads",
  },
  {
    id: "asjhasfhka",
    name: "aflghdajnfk",
  },
];

function Workout() {
  return (
    <Section>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </Section>
  );
}

export default Workout;
