import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { flex } from '@/styles';

interface IWrapperLayoutProps extends HTMLAttributes<HTMLDivElement> {}

function WrapperLayout({ children }: IWrapperLayoutProps) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

export default WrapperLayout;

const Container = styled.div`
  ${flex('', 'center', 'column')};
  padding: 110px 0;
`;

const Wrapper = styled.div`
  max-width: 1140px;
`;
