import styled from 'styled-components';

import { Line } from '@/app/components/atom';
import CompanyInfo from './CompanyInfo';
import CompanyLinks from './CompanyLink';
import CopyRight from './CopyRight';

import { colors, flex } from '@/styles';

function Footer() {
  return (
    <>
      <Container>
        <Line background={colors.BORDER_X1} />
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

const Contents = styled.div`
  ${flex('', '', 'column')};
  row-gap: 3rem;
`;
