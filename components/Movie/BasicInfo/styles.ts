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
  margin-top: 30%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;
`;

export const Hovered = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
