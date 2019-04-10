import * as React from "react";
import styled from "styled-components";
import ColorFormItem, { Color } from "./items/ColorFormItem";

const { useLayoutEffect, useRef } = React;

const ColorBoxWrapper = styled.div`
  width: 340px;
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

interface ColorFormList {
  colors: Color[];
  onPickerHide: (visible: boolean) => () => void;
}

const ColorFormList: React.FC<ColorFormList> = ({ colors, onPickerHide }) => {
  const colorBoxContainer = useLayoutFlexBox([colors]);
  return (
    <ColorBoxWrapper onClick={onPickerHide(false)}>
      <ColorBoxContainer ref={colorBoxContainer}>
        {colors.map(item => (
          <ColorFormItem {...item} />
        ))}
      </ColorBoxContainer>
    </ColorBoxWrapper>
  )
}

export default ColorFormList;
