import Image from 'next/image';
import styled from 'styled-components';

import { Logo } from '@/app/components/atom';

import { FOOTER_LINK_LIST } from '../constant';
import { flex } from '@/styles';

function CompanyLinks() {
  return (
    <Container>
      <Logo />
      <LinkList>
        {FOOTER_LINK_LIST.map((link, idx) => (
          <Image key={`image-${idx}`} alt="sns image" src={link.img} width={24} height={24} />
        ))}
      </LinkList>
    </Container>
  );
}

export default CompanyLinks;

const Container = styled.section`
  ${flex('space-between', 'center')};
  padding-top: 1.5rem;
`;

const LinkList = styled.div`
  ${flex('', '')}
  column-gap: 15px;
`;
