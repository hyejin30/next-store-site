'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  const pathname = useMemo(() => {
    let result = path?.slice(1);

    if (!result) result = 'ABOUT';
    if (result && result.includes('/')) result = result.split('/')[0];

    return result.toUpperCase();
  }, [path]);

  return (
    <html>
      <head />
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools initialIsOpen={false} />
              <Layout>
                <Header />
                <PageTitle>{pathname}</PageTitle>
                <WrapperLayout>
                  <ContentsLayout pathname={pathname}>{children}</ContentsLayout>
                </WrapperLayout>
                <Footer />
              </Layout>
              <div id="modal"></div>
            </QueryClientProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
