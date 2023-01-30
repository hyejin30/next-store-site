import { useState, MouseEvent } from 'react';

import Modal from '@/components/molecule/Modal';
import Card from './Card';

import { Grid } from '@mui/material';
import { ICardData } from '@/types/store';

interface ICardsProps<T> {
  data: T[];
}

function Cards<T extends ICardData>({ data }: ICardsProps<T>) {
  return (
    <Grid container spacing={{ sm: 4, md: 4 }}>
      {data?.map((card, idx) => (
        <Card key={`card-${idx}`} data={card} />
      ))}
    </Grid>
  );
}

export default Cards;
