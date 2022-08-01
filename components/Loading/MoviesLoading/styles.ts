import styled from 'styled-components';
import { keyframesFullView, shimmerAnimation } from '../../../layout/utils';

export const LoadingMovie = styled.div`
  height: 18.75rem;
  width: 12.5rem;
  animation: ${keyframesFullView} 0.5s forwards
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${shimmerAnimation}
`;
