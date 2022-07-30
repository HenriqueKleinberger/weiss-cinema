import styled from 'styled-components';

interface IBox {
  isHovered: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
`;
export const Box = styled.div<IBox>`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${(props) => (props.isHovered ? '0.1' : '1')};
  top: 0;
  left: 0;
`;
