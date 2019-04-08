import * as React from "react";
import styled from "styled-components";
import ColorForm from "./ColorForm";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TopContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TopTitle = styled.h1`
  font-size: 35px;
  color: #FF684A;
  letter-spacing: 0.3em;
  margin-top: -50px;
  margin-bottom: 50px;
`;

const ColorTopScreen: React.FC = () => {
  return (
    <Container>
      <TopContents>
        <TopTitle>cocon</TopTitle>
        <ColorForm />
      </TopContents>
    </Container>
  );
}

export default ColorTopScreen;