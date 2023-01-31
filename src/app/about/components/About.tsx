'use client';

import styled from 'styled-components';
import { flex, fontSize } from '@/styles';

function About() {
  return (
    <Container>
      <ProjectInfo>Next.js를 활용해 커먼그라운드의 'Eat' 페이지를 클론한 프로젝트입니다.</ProjectInfo>
      <ul>
        <Item>Next 13에서 업데이트 된 내용을 반영했습니다.</Item>
        <Item>- 폴더 기반 라우팅</Item>
        <Item>- Server Component와 Client Component의 구분</Item>
        <Item>- Data fetching 방식 변경 : fetch(URL, cache option)</Item>
      </ul>
    </Container>
  );
}

export default About;

const Container = styled.div`
  ${flex('', '', 'column')};
  row-gap: 100px;
`;

const ProjectInfo = styled.h1`
  font-size: ${fontSize.medium};
  font-weight: 500;
`;

const Item = styled.li`
  font-size: ${fontSize.medium};
  font-weight: 300;
  margin-bottom: 20px;
`;
