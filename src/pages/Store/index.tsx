'use client';

import styled from 'styled-components';
import { PageTitle } from '@/components/molecule';

import { flex } from '@/styles';
import { IStore } from '@/types/store';

interface IStoreProps {
  stores: IStore[];
}

export function Store({ stores }: IStoreProps) {
  return (
    <Container>
      <PageTitle>STORE</PageTitle>
      {stores?.map((store, idx) => (
        <div key={`store-${idx}`}>{store.id}</div>
      ))}
    </Container>
  );
}

export default Store;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 30px;
`;
