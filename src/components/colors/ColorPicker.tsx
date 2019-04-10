import * as React from "react";
import styled from "styled-components";
import { ChromePicker, ColorResult } from "react-color";

interface PickerPoistion {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const PickerContainer = styled.div`
  position: absolute;
  ${(props: {position: PickerPoistion}) => {
    const {position} = props;
    return `
      top: ${position.top};
      bottom: ${position.bottom};
      left: ${position.left};
      right: ${position.right};
    `
  }}
  z-index: 10;
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
  padding-top: 30px;
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
  position: PickerPoistion;
}

const ColorPicker: React.FC<ColorPickerProps> = ({visible, color, onChange, onClose, position}) => {

  const handleOnChangeColor = (event: ColorResult) => {
    onChange(event.hex);
  }

  if(!visible) {
    return null;
  }

  return (
    <PickerContainer position={position}>
      <PickerWrapper>
        <ChromePicker disableAlpha={true} color={color} onChange={handleOnChangeColor} />
        <CloseButton>
          <ButtonText onClick={onClose}>Close</ButtonText>
        </CloseButton>
      </PickerWrapper>
    </PickerContainer>
  )
}

export default ColorPicker;