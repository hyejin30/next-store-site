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

  const { name, description, image, thumb, url } = data;

  const toggleModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  return (
    <>
      <Card.Thumb src={thumb} onClick={toggleModal} />
      <Modal isOpen={showModal} onClose={toggleModal}>
        <Container>
          <Card.Inner>
            <Card.Image fill alt="store image" src={image} />
          </Card.Inner>
          <Card.Inner>
            <Card.Info>
              <Card.Detail>
                <Typography variant="h4">{name}</Typography>
                <Typography component="p" sx={{ lineHeight: 2, whiteSpace: 'pre-wrap' }}>
                  {description}
                </Typography>
              </Card.Detail>
              {url && (
                <a href={url}>
                  <Typography component="p" sx={{ fontWeight: 700 }}>
                    {url}
                  </Typography>
                </a>
              )}
            </Card.Info>
          </Card.Inner>
        </Container>
      </Modal>
    </>
  );
}

export default Card;

const Container = styled.div`
  ${flex('', '')};
  width: calc(100vw - 100px);
  height: 900px;
  border-radius: 8px;
  background: ${colors.WHITE};
`;

const CardInner = styled.section`
  position: relative;
  width: 100%;
`;

const CardImage = styled(Image)`
  border-radius: 8px 0 0 8px;
`;

const CardInfo = styled.div`
  ${flex('space-between', '', 'column')};
  width: 100%;
  height: 100%;
  padding: 100px 70px 70px 70px;
  row-gap: 60px;
`;

const CardDetail = styled.div`
  ${flex('space-between', '', 'column')};
  height: 100%;
`;

Card.Thumb = memo(CardThumb);
Card.Image = CardImage;
Card.Inner = CardInner;
Card.Info = CardInfo;
Card.Detail = CardDetail;
