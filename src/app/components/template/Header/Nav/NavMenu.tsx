import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Text } from '@/app/components/atom';
import { colors } from '@/styles';

interface INavMenuProps {
  children: ReactNode;
  path: string;
}

function NavMenu({ children, path }: INavMenuProps) {
  const pathname = usePathname();

  return (
    <Link href={path}>
      <Text.Regular color={pathname === path ? colors.BLUE : colors.BLACK} weight={pathname === path ? 700 : 400}>
        {children}
      </Text.Regular>
    </Link>
  );
}

export default NavMenu;
