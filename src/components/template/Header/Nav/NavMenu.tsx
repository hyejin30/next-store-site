import { ReactNode } from 'react';
import Link from 'next/link';

import { Typography } from '@mui/material';
import { colors } from '@/styles';

interface INavMenuProps {
  children: ReactNode;
  path: string;
}

function NavMenu({ children, path }: INavMenuProps) {
  return (
    <Link href={path}>
      <Typography
        color={colors.BLACK}
        variant="h6"
        sx={{
          fontFamily: 'Kanit',
        }}
      >
        {children}
      </Typography>
    </Link>
  );
}

export default NavMenu;
