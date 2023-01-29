import { ReactNode } from 'react';
import styled from 'styled-components';

import { Line, Text } from '@/app/components/atom';
import { colors, flex } from '@/styles';

interface IPageTitleProps {
  children: ReactNode;
}

function PageTitle({ children }: IPageTitleProps) {
  return (
    <Container>
      <Title color={colors.BLUE}>{children}</Title>
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

const Title = styled(Text.Large)`
  font-family: 'Kanit', sans-serif;
`;

const LineList = styled.div`
  ${flex('', '')}
  width: 100%;
  column-gap: 10px;
`;
