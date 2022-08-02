import styled from 'styled-components';

interface ITab {
  active: boolean;
}

export const Container = styled.div`
  padding: 0.5rem 2rem;
  min-height: 100vh;
  background-color: var(--background);
`;
export const Logo = styled.div`
  color: var(--primary);
  fill: currentColor;
  align-items: center;
  display: flex;
  font-weight: 500;
  letter-spacing: 1px;
  gap: 1rem;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Tab = styled.a<ITab>`
  text-decoration: ${(props) => (props.active ? 'underline' : '')};
  font-weight: ${(props) => (props.active ? '800' : '400')};
  text-transform: uppercase;
  color: var(--white);
  cursor: pointer;
`;
