import styled from 'styled-components';

import Image from 'next/image';
import { Typography } from '@mui/material';

import { colors, flex } from '@/styles';
import { IStoreData } from '@/types/store';

interface IStoreDetailProps {
  data: IStoreData;
}

function StoreDetail({ data }: IStoreDetailProps) {
  const { name, description, image, url } = data;

  return (
    <Container>
      <Inner>
        <StoreImage fill alt="store image" src={image} />
      </Inner>
      <Inner>
        <StoreInfo>
          <Description>
            <Typography variant="h4">{name}</Typography>
            <Typography component="p" sx={{ lineHeight: 2, whiteSpace: 'pre-wrap' }}>
              {description}
            </Typography>
          </Description>
          {url && (
            <a href={url}>
              <Typography component="p" sx={{ fontWeight: 700 }}>
                {url}
              </Typography>
            </a>
          )}
        </StoreInfo>
      </Inner>
    </Container>
  );
}

export default StoreDetail;

const Container = styled.div`
  ${flex('', '')};
  width: calc(100vw - 100px);
  height: 900px;
  border-radius: 8px;
  background: ${colors.WHITE};
`;

const Inner = styled.section`
  position: relative;
  width: 100%;
`;

const StoreImage = styled(Image)`
  border-radius: 8px 0 0 8px;
`;

const StoreInfo = styled.div`
  ${flex('space-between', '', 'column')};
  width: 100%;
  height: 100%;
  padding: 100px 70px 70px 70px;
  row-gap: 60px;
`;

const Description = styled.div`
  ${flex('space-between', '', 'column')};
  height: 100%;
`;
