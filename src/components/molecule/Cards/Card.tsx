import { useState, memo, useCallback } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Grid } from '@mui/material';
import Modal from '@/components/molecule/Modal';
import CardDetail from './CardDetail';

import { ICardData } from '@/types/store';

interface ICardProps<T> {
  data: T;
}

function Card<T extends ICardData>({ data }: ICardProps<T>) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  return (
    <>
      <Card.Thumb src={data.thumb} onClick={toggleModal} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <CardDetail />
        </Modal>
      )}
    </>
  );
}

export default Card;

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

Card.Thumb = memo(CardThumb);

const Thumbnail = styled(Image)`
  border-radius: 8px;
  cursor: pointer;
`;
