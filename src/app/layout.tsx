'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

import { PageTitle } from '@/components/molecule';
import { Header, Footer, Layout, WrapperLayout, ContentsLayout } from '@/components/template';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Spoqa Han Sans Neo',
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const pathname = useMemo(() => path?.slice(1).toUpperCase() || 'ABOUT', [path]);

  return (
    <html>
      <head />
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <Layout>
              <Header />
              <PageTitle>{pathname}</PageTitle>
              <WrapperLayout>
                <ContentsLayout pathname={pathname}>{children}</ContentsLayout>
              </WrapperLayout>
              <Footer />
            </Layout>
            <div id="modal"></div>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
