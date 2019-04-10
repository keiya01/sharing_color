import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FadeIn, Scaling } from 'src/components/common/AnimationComponents';

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
  position: relative;
`;

const ColorCode = styled.p`
  color: #ffffff;
  font-size: 11px;
  text-shadow: 0 0 20px #888;
  font-weight: bold;
  cursor: text;
`;

const CloseIcon = styled.p`
  position: absolute;
  top: -4px;
  right: -4px;
  font-size: 18px;
  color: ${(props: { color: string }) => props.color === "#555555" ? "#666666" : "#555555"};
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
    <Scaling>
      <ColorBox
        key={id}
        style={{ backgroundColor: color }}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        {
          isHovered &&
          <FadeIn>
            <CloseIcon color={color}>
              <FontAwesomeIcon icon="times-circle" />
            </CloseIcon>
            <ColorCode>{color}</ColorCode>
          </FadeIn>
        }
      </ColorBox>
    </Scaling>
  );
};

export default ColorFormItem;
