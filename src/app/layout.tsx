'use client';

import { Header, Footer, WrapperLayout } from '@/components/template';
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
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <WrapperLayout>
              <Header />
              {children}
              <Footer />
            </WrapperLayout>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
