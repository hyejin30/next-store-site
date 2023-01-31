'use client';

import styled from 'styled-components';

import { Cards, PageTitle } from '@/components/molecule';
import { Typography } from '@mui/material';
import Card from './Card';

import { colors, flex } from '@/styles';
import { ICardData } from '@/types/store';

interface IStoreProps {
  stores: ICardData[];
}

export function Store({ stores }: IStoreProps) {
  return (
    <Container>
      <PageTitle>STORE</PageTitle>
      <StoreSection>
        <Wrapper>
          <Typography
            color={colors.BLACK}
            variant="h4"
            sx={{
              fontFamily: 'Kanit',
            }}
          >
            STORE
          </Typography>
          <Cards>
            {stores.map((store, idx) => (
              <Card key={`card-${idx}`} data={store} />
            ))}
          </Cards>
        </Wrapper>
      </StoreSection>
    </Container>
  );
}

export default Store;

const Container = styled.div`
  ${flex('', '', 'column')};
`;

const StoreSection = styled.section`
  ${flex('', 'center', 'column')};
  padding: 110px 0;
`;

const Wrapper = styled.div`
  ${flex('', '', 'column')};
  max-width: 1140px;
  row-gap: 40px;
`;
