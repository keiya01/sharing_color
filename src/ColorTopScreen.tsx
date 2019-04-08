import * as React from "react";
import styled from "styled-components";
import ColorForm from "./ColorForm";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ColorTopScreen: React.FC = () => {
  return (
    <Container>
      <FormWrapper>
        <ColorForm />
      </FormWrapper>
    </Container>
  );
}

export default ColorTopScreen;