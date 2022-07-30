import styled from 'styled-components';

interface IBtn {
  active: boolean;
}

export const Like = styled.button<IBtn>`
  background: none;
  color: ${(props) => (props.active ? 'var(--primary)' : 'rgba(0,0,0,0.8)')};
  border: none;
  padding: 0;
  cursor: pointer;
  outline: red;
  margin: 7%;
`;

export const Data = styled.div`
  color: var(--secondary);
  text-align: center;
  font-weight: 600;
  margin-top: 80%;
`;
