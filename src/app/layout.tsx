'use client';

import { Header, Footer } from '@/app/components/template';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyle from '@/styles/globals';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
