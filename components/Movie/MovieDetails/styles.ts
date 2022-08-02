import styled from 'styled-components';
import { keyframesFullView, shimmerAnimation } from '../../../layout/utils';

export const PosterLoading = styled.div`
  height: 100%;
  width: 100%;
  animation: ${keyframesFullView} 0.5s forwards
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${shimmerAnimation}
`;

export const InfoLoading = styled.div`
  height: 1rem;
  margin: 0.5rem;
  ${shimmerAnimation}
`;

export const Container = styled.div`
  position: fixed;
  inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
  padding: 2.3rem 1.2rem 1.2rem;
`;

export const Data = styled.aside`
  height: 65%;
  width: 50%;
  background-color: var(--background);
  color: var(--secondary);
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  overflow: auto;
`;

export const ErrorData = styled.aside`
  height: 60%;
  width: 50%;
  background-color: var(--background);
  color: var(--secondary);
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
`;

export const Poster = styled.div`
  position: relative;
`;

export const Details = styled.section``;
export const Title = styled.h1`
  margin: 0 0.2rem 0 0;
`;
export const Year = styled.p`
  margin: 0;
  font-size: 0.7rem;
`;
export const MainDetails = styled.div`
  color: var(--white);
  margin: 0.5rem;
`;
export const OtherDetails = styled.section`
  margin: 0.5rem;
`;

export const Headline = styled.div`
  display: flex;
`;
