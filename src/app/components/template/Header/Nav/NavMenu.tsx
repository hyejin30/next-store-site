import { ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { Text } from '@/app/components/atom';

interface INavMenuProps {
  children: ReactNode;
  path: string;
}

function NavMenu({ children, path }: INavMenuProps) {
  return (
    <Link href={path}>
      <NavMenuText>{children}</NavMenuText>
    </Link>
  );
}

export default NavMenu;

const NavMenuText = styled(Text.Medium)`
  font-family: 'Kanit', sans-serif;
`;
