import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface IWrapperLayoutProps extends HTMLAttributes<HTMLDivElement> {}

function WrapperLayout({ children }: IWrapperLayoutProps) {
  return <Container>{children}</Container>;
}

export default WrapperLayout;

const Container = styled.div`
  padding: 0 24px;
`;
