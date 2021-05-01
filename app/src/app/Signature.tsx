import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 14px;
  padding: 14px;
  margin-bottom: 10px;
  overflow-wrap: anywhere;
`;

export const Signature: FC = ({ children }) => {
  if (!children) {
    return null;
  }

  return <Wrapper data-testid="signature">{children}</Wrapper>;
};
