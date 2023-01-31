import { ReactNode } from 'react';
import styled from 'styled-components';

import { Line } from '@/components/atom';

import { colors, flex, fontSize, campton } from '@/styles';

interface IPageTitleProps {
  children: ReactNode;
}

function PageTitle({ children }: IPageTitleProps) {
  return (
    <Container>
      <Title className={campton.className}>{children}</Title>
      <LineList>
        <Line background={colors.BLUE} height={0.5} />
        <Line background={colors.BLUE} height={0.5} />
      </LineList>
    </Container>
  );
}

export default PageTitle;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 30px;
`;

const Title = styled.h1`
  font-size: ${fontSize.large};
  color: ${colors.BLUE};
`;

const LineList = styled.div`
  ${flex('', '')}
  width: 100%;
  column-gap: 10px;
`;
