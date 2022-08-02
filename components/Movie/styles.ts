import styled from 'styled-components';

interface IBox {
  isHovered: boolean;
}

export const Container = styled.div`
  position: relative;
  height: 18.75rem;
  width: 12.5rem;
`;
export const Box = styled.div<IBox>`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${(props) => (props.isHovered ? '0.1' : '1')};
  top: 0;
  left: 0;
`;

export const ShowButtonOnWishlist = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  margin: 7%;
`;
