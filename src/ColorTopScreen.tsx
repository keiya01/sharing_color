import * as React from "react";
import styled from "styled-components";
import ColorForm from "./ColorForm";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

const ColorTopScreen: React.FC = () => {
  return (
    <Container>
      <ColorForm/>
    </Container>
  );
}

export default ColorTopScreen;