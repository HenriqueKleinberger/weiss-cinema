import LogoImg from '../../public/logo.svg';
import BasicLayout from '../../layout/BasicLayout';
import { Container, Logo } from './styles';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BasicLayout>
      <Container>
        <Logo>
          <LogoImg alt="weiss logo" width="30" height="30" />
          WEISS CINEMA
        </Logo>
        {children}
        <footer></footer>
      </Container>
    </BasicLayout>
  );
}
