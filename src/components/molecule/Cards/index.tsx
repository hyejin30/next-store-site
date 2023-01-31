import { Children, ReactNode } from 'react';
import { Grid } from '@mui/material';

interface ICardsProps {
  children: ReactNode;
}

function Cards({ children }: ICardsProps) {
  return (
    <Grid container spacing={{ sm: 4, md: 4 }}>
      {Children.toArray(children)?.map((child) => (
        <>{child}</>
      ))}
    </Grid>
  );
}

export default Cards;
