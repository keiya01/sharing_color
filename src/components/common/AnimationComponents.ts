import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FadeIn = styled.div`
  animation: ${fadeInAnimation} 300ms ease;
  animation-fill-mode: forwards; 
`;
