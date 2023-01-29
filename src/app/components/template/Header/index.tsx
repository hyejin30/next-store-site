import styled from 'styled-components';

import { Logo } from '@/app/components/atom';
import Nav from './Nav';

import { flex, colors, Z_INDEX } from '@/styles';

function Header() {
  return (
    <Container>
      <div />
      <Nav />
      <Logo path="/" />
    </Container>
  );
}

export default Header;

const Container = styled.header`
  ${flex('space-between', 'center')}
  position: sticky;
  top: 0;
  height: 94px;
  background: ${colors.WHITE};
  z-index: ${Z_INDEX.header};
`;
