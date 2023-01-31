import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ILayoutProps extends HTMLAttributes<HTMLDivElement> {}

function Layout({ children }: ILayoutProps) {
  return <Container>{children}</Container>;
}

export default Layout;

const Container = styled.div`
  padding: 0 32px;
`;
