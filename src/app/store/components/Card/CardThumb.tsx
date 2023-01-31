import Image from 'next/image';
import styled from 'styled-components';
import { Grid } from '@mui/material';

interface ICardThumbProps {
  src: string;
  onClick: () => void;
}

function CardThumb({ src, onClick }: ICardThumbProps) {
  return (
    <Grid item sm={6} md={2.4} onClick={onClick}>
      <Thumbnail alt="image" src={src} width={200} height={200} />
    </Grid>
  );
}

const Thumbnail = styled(Image)`
  border-radius: 8px;
  cursor: pointer;
`;

export default CardThumb;
