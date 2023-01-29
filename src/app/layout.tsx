'use client';

import { Header, Footer } from '@/app/components/template';
import styled from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Spoqa Han Sans Neo',
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" type="text/css"></link>
      <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@500;700&display=swap" rel="stylesheet"></link>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <Wrapper>
              <Header />
              {children}
              <Footer />
            </Wrapper>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

const Wrapper = styled.div`
  padding: 0 24px;
`;
