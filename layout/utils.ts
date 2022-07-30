import { keyframes, css } from 'styled-components';

export const keyframesFullView = keyframes`
  100% {
    width: 100%;
  }
`;

export const keyframesShimmer = keyframes`
  0% {
    background-position: -80vw 0;
  }
  100% {
    background-position: 80vw 0;
  }
`;

export const shimmerAnimation = css`
  background: linear-gradient(
    to right,
    #3a3a3a 0%,
    #3f3f3f 10%,
    #4a4a4a 20%,
    #3f3f3f 30%,
    #3a3a3a 50%,
    #3a3a3a 100%
  );
  background-size: 80vw 100%;
  animation: ${keyframesShimmer} 2s infinite linear;
`;
