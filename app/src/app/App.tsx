import React from "react";
import { Form } from "./Form";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Form />
    </Wrapper>
  );
}

export default App;
