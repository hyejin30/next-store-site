import styled from 'styled-components';

import { Box, Grid } from '@mui/material';
import Image from 'next/image';

interface ICardsProps {
  images: string[];
}

function Cards({ images }: ICardsProps) {
  return (
    <Grid container spacing={{ sm: 4, md: 4 }}>
      {images?.map((img, idx) => (
        <Grid key={`img-${idx}`} item sm={6} md={2.4}>
          <CardImage alt="image" src={img} width={200} height={200} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Cards;

const CardImage = styled(Image)`
  border-radius: 8px;
`;
