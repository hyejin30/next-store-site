'use client';
import styled from 'styled-components';

import { Cards, PageTitle } from '@/components/molecule';
import { Typography } from '@mui/material';

import { colors, flex } from '@/styles';
import { IStore } from '@/types/store';

interface IStoreProps {
  stores: IStore[];
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
          <Cards images={stores.map((store) => store.thumb)} />
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
  padding: 80px 0;
`;

const Wrapper = styled.div`
  ${flex('', '', 'column')};
  max-width: 980px;
  row-gap: 30px;
`;
