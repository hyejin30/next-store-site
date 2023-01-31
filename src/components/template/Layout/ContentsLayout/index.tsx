import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { colors, flex, campton, fontSize } from '@/styles';

interface IContentsLayoutProps extends HTMLAttributes<HTMLDivElement> {
  pathname: string;
}

function ContentsLayout({ pathname, children }: IContentsLayoutProps) {
  return (
    <Container>
      <Title className={campton.className}>{pathname}</Title>
      {children}
    </Container>
  );
}

export default ContentsLayout;

const Container = styled.div`
  ${flex('', '', 'column')};
  width: 100%;
  row-gap: 40px;
  min-height: 514px;
`;

const Title = styled.h1`
  font-size: ${fontSize.large};
  color: ${colors.BLACK};
`;
