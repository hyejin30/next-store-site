import styled from 'styled-components';

import NavMenu from './NavMenu';

import { flex } from '@/styles';

function Nav() {
  return (
    <Navigation>
      <NavMenu path="/">ABOUT</NavMenu>
      <NavMenu path="/store">STORE</NavMenu>
    </Navigation>
  );
}

export default Nav;

const Navigation = styled.nav`
  ${flex('', '')}
  column-gap: 30px;
  transform: translateX(-50%);
`;
