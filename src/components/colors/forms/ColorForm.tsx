import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColorPicker from '../ColorPicker';
import ColorFormList from "../lists/ColorFormList";
import { Color, ColorError } from "../lists/items/ColorFormItem";
import { BaseColor, ActiveColor } from "../../../constants/color"
import { CommonBody } from '../../common/TextComponents';

const { useState, useReducer } = React;

const Form = styled.div`
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
  border-top: 1px solid ${BaseColor};
  border-left: 1px solid ${BaseColor};
  border-bottom: 1px solid ${BaseColor};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  letter-spacing: 0.15em;
  color: #555;
  text-align: center;
  &:focus {
    border-top: 1px solid ${ActiveColor};
    border-left: 1px solid ${ActiveColor};
    border-bottom: 1px solid ${ActiveColor};
  }
  &::placeholder {
    color: #aaa;
    font-size: 14px;
  }
`;

const Button = styled.button`
  padding: 8px;
  padding-bottom: 5px;
  font-size: 14px;
  background-color: ${BaseColor};
  color: #fff;
  letter-spacing: 0.07em;
  border: 1px solid ${BaseColor};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${ActiveColor};
    border: 1px solid ${ActiveColor};
  }
`;

const ErrorBox = styled.div`
  width: 100%;
  padding: 5px 0;
  text-align: center;
`;

interface State {
  colors: Color[],
  errors: ColorError,
}
const initialState: State = {
  colors: [],
  errors: {
    codeError: "",
  },
};

interface Action {
  type?: string,
  color?: string,
}

let colorId = 0;
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_COLOR": {
      colorId++;

      if (!action.color) {
        return state
      }

      const color: Color = {
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
    case "CODE_ERROR": {
      return {
        ...state,
        errors: {
          codeError: "6文字の16進数で入力してください"
        }
      }
    }
    case "RESET_ERROR": {
      return {
        ...state,
        errors: {
          codeError: ""
        }
      }
    }
    default: return state;
  }
};

const ColorForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, changeText] = useState("");
  const [visible, setVisible] = useState(false);

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length > 7) {
      dispatch({ type: "CODE_ERROR" });
      return;
    }
    changeText(value);
  };

  const handleOnRegiste = () => {
    dispatch({ type: "RESET_ERROR" });
    
    const isHexadeciam = text.match(/^#?[0-9|a-f]{6}/i);
    if (!isHexadeciam || text.length > 7) {
      dispatch({ type: "CODE_ERROR" });
      return;
    }
    
    if (!visible) {
      changeText("");
    }
    
    let color = text;
    const hasHashtag = color.startsWith("#");
    if (!hasHashtag) {
      color = `#${text}`;
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
            <ColorInput
              onKeyUp={handleOnPressEnter}
              value={text}
              onChange={handleChangeText}
              placeholder="ex. #FFFFFF"
            />
            <Button onClick={handleOnRegiste}>色を追加</Button>
            {
              state.errors.codeError !== ""
              &&
              <ErrorBox>
                <CommonBody fontColor={"#f41446"}>{state.errors.codeError}</CommonBody>
              </ErrorBox>
            }
            <ColorPicker
              visible={visible}
              onClose={handleOnTogglePicker(false)}
              color={text}
              onChange={changeText}
              position={{ top: "50px", left: "-30px" }}
            />
          </InputContainer>
        </InputWrapper>
        <ColorFormList onPickerHide={handleOnTogglePicker} colors={state.colors} />
      </Form>
    </>
  );
}

export default ColorForm;