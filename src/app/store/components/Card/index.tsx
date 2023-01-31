import { useState, memo, useCallback } from 'react';
import styled from 'styled-components';

import Image from 'next/image';
import Modal from '@/components/molecule/Modal';
import CardThumb from './CardThumb';
import { Typography } from '@mui/material';

import { flex, colors } from '@/styles';
import { ICardData } from '@/types/store';

interface ICardProps {
  data: ICardData;
}

function Card({ data }: ICardProps) {
  const [showModal, setShowModal] = useState(false);

  const { name, description, image, thumb } = data;

  const toggleModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  return (
    <>
      <Card.Thumb src={thumb} onClick={toggleModal} />
      <Modal isOpen={showModal} onClose={toggleModal}>
        <Container>
          <Card.Image alt="store image" src={image} width={600} height={900} />
          <Card.Info>
            <Card.Detail>
              <Typography variant="h4">{name}</Typography>
              <Typography component="p" sx={{ lineHeight: 2, whiteSpace: 'pre-wrap' }}>
                {description}
              </Typography>
            </Card.Detail>
            <Typography component="p" sx={{ fontWeight: 700 }}>
              매장 위치 보기
            </Typography>
          </Card.Info>
        </Container>
      </Modal>
    </>
  );
}

export default Card;

const Container = styled.div`
  ${flex('', '')};
  border-radius: 8px;
  background: ${colors.WHITE};
`;

const CardImage = styled(Image)`
  border-radius: 8px 0 0 8px;
`;

const CardInfo = styled.div`
  ${flex('space-between', '', 'column')};
  width: 600px;
  padding: 100px 70px 70px 70px;
  row-gap: 60px;
`;

const CardDetail = styled.div`
  ${flex('space-between', '', 'column')};
  height: 100%;
`;

Card.Thumb = memo(CardThumb);
Card.Image = CardImage;
Card.Info = CardInfo;
Card.Detail = CardDetail;
