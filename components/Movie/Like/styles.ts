import styled from 'styled-components';

interface IBtn {
  active: boolean;
}

export const Button = styled.button<IBtn>`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: red;
  stroke: var(--primary);
  stroke-width: 25px;
  fill: ${(props) => (props.active ? 'var(--primary)' : '#000000')};
  z-index: 1;
`;
