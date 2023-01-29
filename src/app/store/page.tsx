'use client';

import styled from 'styled-components';

import { PageTitle } from '@/app/components/molecule';

import { flex } from '@/styles';

function Store() {
  return (
    <Container>
      <PageTitle>STORE</PageTitle>
    </Container>
  );
}

export default Store;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 30px;
`;
