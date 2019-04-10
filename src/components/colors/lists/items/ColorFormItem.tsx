import * as React from "react";
import styled from "styled-components";

const ColorBox = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  box-shadow: 1px 2px 5px #bbb;
  margin: 5px 10px;
  cursor: pointer;
`;

export interface Color {
  id: number;
  color: string;
}

export interface ColorError {
  codeError?: string;
}

const ColorFormItem: React.FC<Color> = ({id, color}) => {
  return (
    <ColorBox key={id} style={{ backgroundColor: color }} />
  );
};

export default ColorFormItem;
