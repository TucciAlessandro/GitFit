import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
`;

interface ListProps {
  children: ReactNode;
}
function List({
  children,
  ...rest
}: ListProps & React.LiHTMLAttributes<HTMLUListElement>) {
  return <StyledList {...rest}>{children}</StyledList>;
}
export default List;
