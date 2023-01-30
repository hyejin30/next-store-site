import Image from 'next/image';
import styled from 'styled-components';
import { useState } from 'react';

import { Grid } from '@mui/material';
import Modal from '@/components/molecule/Modal';

import { ICardData } from '@/types/store';
import CardDetail from './CardDetail';

interface ICardProps<T> {
  data: T;
}

function Card<T extends ICardData>({ data }: ICardProps<T>) {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Grid item sm={6} md={2.4} onClick={handleCardClick}>
        <Thumbnail alt="image" src={data.thumb} width={200} height={200} />
      </Grid>
      {showModal && (
        <Modal onClose={toggleModal}>
          <CardDetail />
        </Modal>
      )}
    </>
  );
}

export default Card;

const Thumbnail = styled(Image)`
  border-radius: 8px;
  cursor: pointer;
`;
