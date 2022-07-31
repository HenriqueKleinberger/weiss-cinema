import styled from 'styled-components';
import { keyframesFullView, shimmerAnimation } from '../../../layout/utils';

export const LoadingMovie = styled.div`
  height: 100%;
  width: 100%;
  animation: ${keyframesFullView} 0.5s forwards
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${shimmerAnimation}
`;

export const ContainerLoading = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
`;
