import React, { ReactNode, HTMLProps, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const variants: any = {
  primary: "#f67238",
  secondary: "blue",
  danger: "#990000",
};

interface StyledButtonProps {
  variant: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: 5px;
  width: auto;
  padding: 0.5rem 1rem;
  background-color: ${(props) => variants[props.variant]};
  color: white;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: bold;
  -webkit-box-shadow: 0px 0px 15px 0px ${(props) => variants[props.variant]};
  -moz-box-shadow: 0px 0px 15px 0px ${(props) => variants[props.variant]};
  box-shadow: 0px 0px 15px 0px ${(props) => variants[props.variant]};
  &:hover {
    -webkit-box-shadow: 0px 0px 50px 0px ${(props) => variants[props.variant]};
    -moz-box-shadow: 0px 0px 50px 0px ${(props) => variants[props.variant]};
    box-shadow: 0px 0px 50px 0px ${(props) => variants[props.variant]};
  }
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease-in-out;
`;

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

const Button = ({
  children,
  variant = "primary",
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
