import styled from 'styled-components';

import { Logo } from '@/app/components/atom';
import Nav from './Nav';

import { flex } from '@/styles';

function Header() {
  return (
    <Container>
      <Logo path="/" />
      <Nav />
      <div />
    </Container>
  );
}

export default Header;

const Container = styled.header`
  ${flex('space-between', 'center')}
  height: 94px;
  padding: 0 24px;
`;
