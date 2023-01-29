'use client';

import styled from 'styled-components';

import { PageTitle } from '@/app/components/molecule';

import { flex } from '@/styles';

function About() {
  return (
    <Container>
      <PageTitle>ABOUT</PageTitle>
    </Container>
  );
}

export default About;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 30px;
`;
