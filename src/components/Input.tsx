import React from "react";
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

export default Input;
