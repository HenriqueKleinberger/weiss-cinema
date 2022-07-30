import styled from 'styled-components';

export const MovieContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
`;

export const Search = styled.section`
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: currentColor;
  color: var(--white);
`;

export const Input = styled.input`
  background-color: var(--background);
  color: var(--white);
  border: 2px solid var(--secondary);
  &:focus {
    outline: 0.1em var(--secondary);
  }
  margin: 0.3rem;
`;
