import LogoImg from '../../public/logo.svg';
import BasicLayout from '../../layout/BasicLayout';
import { Container, Logo, Header } from './styles';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BasicLayout>
      <Container>
        <Header>
          <Logo>
            <LogoImg alt="weiss logo" width="30" height="30" />
            WEISS CINEMA
          </Logo>
          <div />
        </Header>
        {children}
        <footer></footer>
      </Container>
    </BasicLayout>
  );
}
