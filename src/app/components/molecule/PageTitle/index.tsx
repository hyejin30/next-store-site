import { ReactNode } from 'react';
import styled from 'styled-components';

import { Typography } from '@mui/material';
import { Line } from '@/app/components/atom';

import { colors, flex } from '@/styles';

interface IPageTitleProps {
  children: ReactNode;
}

function PageTitle({ children }: IPageTitleProps) {
  return (
    <Container>
      <Typography
        color={colors.BLUE}
        variant="h4"
        sx={{
          fontFamily: 'Kanit',
        }}
      >
        {children}
      </Typography>
      <LineList>
        <Line background={colors.BLUE} height={0.3} />
        <Line background={colors.BLUE} height={0.3} />
      </LineList>
    </Container>
  );
}

export default PageTitle;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 30px;
`;

const LineList = styled.div`
  ${flex('', '')}
  width: 100%;
  column-gap: 10px;
`;
