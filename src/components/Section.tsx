import React, { ReactNode } from "react";
import styled from "styled-components";

interface SectionProps {
  children: ReactNode;
}

const StyledSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Separator = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background: #f12711;
  background: -webkit-linear-gradient(to right, #f5af19, #f12711);
  background: linear-gradient(to right, #f5af19, #f12711);

  z-index: -1;
  transform: skewY(3deg);
  transform-origin: top right;
`;

const Section = ({ children }: SectionProps) => {
  return (
    <StyledSection>
      <Separator />
      {children}
    </StyledSection>
  );
};

export default Section;
