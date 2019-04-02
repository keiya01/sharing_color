import * as React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { useState } = React;

const Form = styled.div`
  width: 500px;
  height: 100%;
  padding: 20px;
  border: 2px solid #eeeeee;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  top: 3px;
  left: 70px;
  color: #aaa;
`;

const ColorInput = styled.input.attrs({ type: "text" })`
  width: 270px;
  padding: 5px;
  padding-left: 30px;
  font-size: 16px;
  border: none;
  border-top: 1px solid #FF684A;
  border-left: 1px solid #FF684A;
  border-bottom: 1px solid #FF684A;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 6px;
  font-size: 15px;
  background-color: #FF684A;
  color: #fff;
  letter-spacing: 0.07em;
  border: 1px solid #FF684A;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #FF937E;
  }
`;

const ColorForm: React.FC = () => {
  const [text, changeText] = useState("");

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeText(event.target.value);
  };

  // \uhhhh

  return (
    <Form>
      <InputContainer>
          <Icon>
            <FontAwesomeIcon icon={"hashtag"} />
          </Icon>
          <ColorInput value={text} onChange={handleChangeText} />
        <Button>register</Button>
      </InputContainer>
    </Form>
  );
}

export default ColorForm;