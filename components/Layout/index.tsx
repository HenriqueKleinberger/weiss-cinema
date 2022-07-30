import Link from 'next/link';
import { useRouter } from 'next/router';
import LogoImg from '../../public/logo.svg';
import BasicLayout from '../../layout/BasicLayout';
import { Container, Logo, Header, Navigation, Tab } from './styles';
import { HOME, WISHLIST } from '../../constants/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <BasicLayout>
      <Container>
        <Header>
          <Logo>
            <LogoImg alt="weiss logo" width="30" height="30" />
            WEISS CINEMA
          </Logo>
          <Navigation>
            <Link href={HOME}>
              <Tab active={router.pathname === HOME}>home</Tab>
            </Link>
            <Link href={WISHLIST}>
              <Tab active={router.pathname === WISHLIST}>wishlist</Tab>
            </Link>
          </Navigation>
          <div />
        </Header>
        {children}
        <footer></footer>
      </Container>
    </BasicLayout>
  );
}
