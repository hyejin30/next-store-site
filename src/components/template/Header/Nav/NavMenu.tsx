import { ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { colors, campton, fontSize } from '@/styles';

interface INavMenuProps {
  children: ReactNode;
  path: string;
}

function NavMenu({ children, path }: INavMenuProps) {
  return (
    <Link href={path}>
      <Text className={campton.className}>{children}</Text>
    </Link>
  );
}

export default NavMenu;

const Text = styled.span`
  font-size: ${fontSize.medium};
  color: ${colors.BLACK};
`;
