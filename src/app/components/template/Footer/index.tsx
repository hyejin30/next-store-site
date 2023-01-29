import styled from 'styled-components';

import CompanyInfo from './CompanyInfo';
import CompanyLinks from './CompanyLink';
import CopyRight from './CopyRight';

import { colors, flex } from '@/styles';

function Footer() {
  return (
    <>
      <Container>
        <FooterLine />
        <Contents>
          <CompanyLinks />
          <CompanyInfo />
          <CopyRight />
        </Contents>
      </Container>
    </>
  );
}

export default Footer;

const Container = styled.footer`
  ${flex('', '', 'column')};
`;

const FooterLine = styled.div`
  height: 0.5rem;
  background: ${colors.BACKGROUND_X1};
`;

const Contents = styled.div`
  ${flex('', '', 'column')};
  row-gap: 3rem;
`;
