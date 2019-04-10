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

const scalingAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  20% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1.0);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

export const Scaling = styled.div`
  animation: ${scalingAnimation} 400ms ease-in-out;
  animation-fill-mode: forwards;
`;
