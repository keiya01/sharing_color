import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColorPicker from './ColorPicker';

const { useState, useReducer, useRef, useLayoutEffect } = React;

const Form = styled.div`
  width: 90%;
  max-width: 400px;
  box-shadow: 1px 2px 6px #999;
  padding: 20px;
`;

const HidePickerArea = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const InputWrapper = styled.div`
text-align: center;
`;

const InputContainer = styled.div`
display: inline-block;
position: relative;
`;

const OpenPickerButton = styled.div.attrs({ title: "Click to open color picker" })`
  position: absolute;
  top: 8px;
  left: 12px;
  font-size: 18px;
  cursor: pointer;
  color: #e7aded;
  &:hover {
    color: #e6c5ea;
  }
`;

const ColorInput = styled.input.attrs({ type: "text" })`
  width: 70%;
  padding: 8px 0;
  padding-left: 40px;
  padding-right: 5px;
  font-size: 16px;
  border: none;
  border-top: 1px solid #FF684A;
  border-left: 1px solid #FF684A;
  border-bottom: 1px solid #FF684A;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  letter-spacing: 0.15em;
  color: #555;
  text-align: center;
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
`;

const ColorBoxWrapper = styled.div`
  width: 320px;
  height: 160px;
  margin: 0 auto;
  margin-top: 20px;
  overflow-y: scroll;
  padding: 0 10px;
  position: relative;
`;

const ColorBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ColorBox = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px #bbb;
  margin: 5px 10px;
  cursor: pointer;
`;


interface Color {
  id: number;
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
  color: string,
}

let colorId = 0;
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_COLOR": {
      colorId++;
      const color = {
        id: colorId,
        color: action.color,
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

const useLayoutFlexBox = (deps: [any]) => {
  const colorBoxContainer = useRef<HTMLDivElement | null>(null);
  const container = colorBoxContainer.current;

  useLayoutEffect(() => {
    if (!container) {
      return
    }

    if (container.childElementCount > 4) {
      container.style.justifyContent = "start";
      return;
    }

    container.style.justifyContent = "center";
  }, deps);

  return colorBoxContainer;
}

const ColorForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, changeText] = useState("");
  const [visible, setVisible] = useState(false);
  const colorBoxContainer = useLayoutFlexBox([state.colors]);

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length > 7) {
      return;
    }
    changeText(value);
  };

  const handleOnRegiste = () => {
    if (!visible) {
      changeText("");
    }

    const isHexadeciam = text.match(/^#?[0-9|a-f]{6}/i);
    if (!isHexadeciam) {
      return;
    }

    const hasHashtag = text.startsWith("#");
    let color = text;
    if (!hasHashtag) {
      color = `#${color}`;
    }

    if (color.length > 7) {
      return;
    }

    dispatch({ type: "ADD_COLOR", color });
  }

  const handleOnPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      handleOnRegiste();
    }
  }

  const handleOnTogglePicker = (argVisible: boolean) => () => {
    setVisible(argVisible);
  }

  return (
    <>
      <HidePickerArea onClick={handleOnTogglePicker(false)} />
      <Form>
        <InputWrapper>
          <InputContainer>
            <OpenPickerButton onClick={handleOnTogglePicker(!visible)}>
              <FontAwesomeIcon icon="palette" />
            </OpenPickerButton>
            <ColorInput onKeyUp={handleOnPressEnter} value={text} onChange={handleChangeText} />
            <Button onClick={handleOnRegiste}>register</Button>
            <ColorPicker
              visible={visible}
              onClose={handleOnTogglePicker(false)}
              color={text}
              onChange={changeText}
            />
          </InputContainer>
        </InputWrapper>
        <ColorBoxWrapper>
          <ColorBoxContainer ref={colorBoxContainer}>
            {state.colors.map(item => (
              <ColorBox key={item.id} style={{ backgroundColor: item.color }} />
            ))}
          </ColorBoxContainer>
        </ColorBoxWrapper>
      </Form>
    </>
  );
}

export default ColorForm;