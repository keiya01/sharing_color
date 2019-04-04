import * as React from "react";
import styled from "styled-components";
import { ChromePicker, ColorResult } from "react-color";

const PickerContainer = styled.div`
  position: absolute;
  bottom: -260px;
  left: -40px;
`;

const PickerWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const CloseButton = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: absolute;
  bottom: 0px;
`;

const ButtonText = styled.p`
  color: #999;
  padding-top: 10px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: #bbb;
  }
`;

interface ColorPickerProps {
  visible: boolean;
  onClose: () => void;
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({visible, color, onChange, onClose}) => {

  const handleOnChangeColor = (event: ColorResult) => {
    onChange(event.hex);
  }

  if(!visible) {
    return null;
  }

  return (
    <PickerContainer>
      <PickerWrapper>
        <ChromePicker color={color} onChange={handleOnChangeColor} />
        <CloseButton>
          <ButtonText onClick={onClose}>Close</ButtonText>
        </CloseButton>
      </PickerWrapper>
    </PickerContainer>
  )
}

export default ColorPicker;