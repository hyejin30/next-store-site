'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import { Typography } from '@mui/material';
import { flex, colors } from '@/styles';

function Layout({ children }: { children: ReactNode }) {
  const pathName = usePathname();

  return (
    <Container>
      <Typography
        color={colors.BLACK}
        variant="h4"
        sx={{
          fontFamily: 'Kanit',
        }}
      >
        {pathName?.slice(1).toUpperCase() || 'ABOUT'}
      </Typography>
      {children}
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 40px;
`;
