import * as React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { useState, useReducer } = React;

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
  top: 6px;
  left: 138px;
  color: #aaa;
`;

const ColorInput = styled.input.attrs({ type: "text" })`
  width: 130px;
  padding: 5px;
  padding-left: 30px;
  font-size: 16px;
  border: none;
  border-top: 1px solid #FF684A;
  border-left: 1px solid #FF684A;
  border-bottom: 1px solid #FF684A;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  letter-spacing: 0.15em;
  color: #555;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 8px;
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
  &:focus {
    outline: none;
  }
`;

interface Color {
  color: string,
}
interface State {
  colors: Color[],
}
const initialState: State = {
  colors: [],
};

interface Action {
  type: string,
  color: Color,
}

let colorId = 0;
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_COLOR": {
      colorId++;
      const color = {
        id: colorId,
        ...action.color,
      }
      return {
        ...state,
        colors: [
          ...state.colors,
          color,
        ]
      };
    }
    default: return state;
  }
};

const ColorForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, changeText] = useState("");

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length > 7) {
      return;
    }
    changeText(value);
  };

  const handleOnClick = () => {
    const isHexadeciam = text.match(/^#?[0-9|a-f]{6}/i);
    if (!isHexadeciam) {
      return;
    }

    const hasHashtag = text.startsWith("#");
    let color = text;
    if (!hasHashtag) {
      color = `#${color}`;
    }

    if(color.length > 7) {
      return;
    }

    dispatch({ type: "ADD_COLOR", color: { color } });
  }

  return (
    <Form>
      <InputContainer>
        <Icon>
          <FontAwesomeIcon icon={"hashtag"} />
        </Icon>
        <ColorInput value={text} onChange={handleChangeText} />
        <Button onClick={handleOnClick}>register</Button>
      </InputContainer>
      {state.colors.map(item => (
        <p>{item.color}</p>
      ))}
    </Form>
  );
}

export default ColorForm;