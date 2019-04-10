import styled from "styled-components";

export const CommonBody = styled.p`
  font-size: 14px;
  letter-spacing: 0.05em;
  ${(props: { isFontHeight?: boolean, fontColor?: string }) => {
    const { isFontHeight, fontColor } = props;
    return `
      color: ${!fontColor ? "#555" : fontColor};
      ${isFontHeight && "line-height: 1.7;"}
    `;
  }}
`;