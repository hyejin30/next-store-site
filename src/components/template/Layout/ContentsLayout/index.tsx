import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { Typography } from '@mui/material';
import { colors, flex } from '@/styles';

interface IContentsLayoutProps extends HTMLAttributes<HTMLDivElement> {
  pathname: string;
}

function ContentsLayout({ pathname, children }: IContentsLayoutProps) {
  return (
    <Container>
      <Typography
        color={colors.BLACK}
        variant="h4"
        sx={{
          fontFamily: 'Kanit',
        }}
      >
        {pathname}
      </Typography>
      {children}
    </Container>
  );
}

export default ContentsLayout;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 40px;
`;
