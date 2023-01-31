'use client';

import styled from 'styled-components';
import { flex } from '@/styles';
import { Typography } from '@mui/material';

function About() {
  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 500 }}>
        Next.js를 활용해 커먼그라운드의 'Eat' 페이지를 클론한 프로젝트입니다.
      </Typography>
      <UpdateList>
        <li>
          <Typography variant="h5" sx={{ fontWeight: 300 }}>
            Next 13에서 업데이트 된 내용을 반영했습니다.
          </Typography>
        </li>
        <li>
          <Typography variant="h5" sx={{ fontWeight: 300 }}>
            - app 폴더 기반 라우팅
          </Typography>
        </li>
        <li>
          <Typography variant="h5" sx={{ fontWeight: 300 }}>
            - Server Component와 Client Component의 구분
          </Typography>
        </li>
        <li>
          <Typography variant="h5" sx={{ fontWeight: 300 }}>
            - Data fetching 방식 변경 : fetch(URL, cache option)
          </Typography>
        </li>
      </UpdateList>
    </Container>
  );
}

export default About;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 100px;
`;

const UpdateList = styled.ul`
  li {
    margin-bottom: 20px;
  }
`;
