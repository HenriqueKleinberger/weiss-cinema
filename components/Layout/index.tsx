import Image from 'next/image'
import BasicLayout from '../../layout/BasicLayout'
import { Container, Logo } from './styles'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <BasicLayout>
      <Container>
        <Logo>
          <div>
            <Image src="/logo.svg" alt="weiss logo" width="64" height="64" />
            WEISS Cinema
          </div>
        </Logo>
        {children}
        <footer></footer>
      </Container>
    </BasicLayout>
  )
}
