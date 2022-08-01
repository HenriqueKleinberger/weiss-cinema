import styled from 'styled-components';

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
  cursor: pointer;
`;

export const Wishlist = styled.div`
  margin: 7%;
`;
