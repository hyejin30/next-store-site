import Image from 'next/image';
import styled from 'styled-components';
import { Grid } from '@mui/material';

interface IStoreThumbProps {
  id: number;
  src: string;
  onClick: (id: number) => void;
}

function StoreThumb({ id, src, onClick }: IStoreThumbProps) {
  return (
    <div onClick={() => onClick(id)}>
      <ThumbImage alt="image" src={src} width={200} height={200} />
    </div>
  );
}

const ThumbImage = styled(Image)`
  border-radius: 8px;
  cursor: pointer;
`;

export default StoreThumb;
