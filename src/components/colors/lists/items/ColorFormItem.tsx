import * as React from "react";
import styled from "styled-components";

const { useState } = React;

const ColorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px #bbb;
  margin: 5px 10px;
  cursor: pointer;
`;

const ColorCode = styled.p`
  color: #ffffff;
  font-size: 11px;
  text-shadow: 0 0 20px #888;
  font-weight: bold;
  cursor: text;
`;

export interface Color {
  id: number;
  color: string;
}

export interface ColorError {
  codeError?: string;
}

const ColorFormItem: React.FC<Color> = ({ id, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOnMouseEnter = () => {
    setIsHovered(true);
  }

  const handleOnMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <ColorBox
      key={id}
      style={{ backgroundColor: color }}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
    {
      isHovered
      &&
      <ColorCode>{color}</ColorCode>
    }
    </ColorBox>
  );
};

export default ColorFormItem;
