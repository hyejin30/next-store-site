## 프로젝트 소개
- Next.js를 활용해 커먼그라운드의 'Eat' 페이지를 클론한 프로젝트
- 원본 사이트 : https://www.common-ground.co.kr/eat.html
- 개발 인원 : 1인 (김혜진)
- 개발 기간 : 22.1.29 ~ 2.1 (4일)
- 구현한 화면

<img width="880" alt="image" src="https://user-images.githubusercontent.com/98295004/215574488-a72b326d-1d4f-48c4-a18f-827abcbf0de1.png">


## 선정 이유
- Next.js 13에서 업데이트 된 내용을 연습해보기 위해 선정
```
- 폴더 기반 라우팅
- Server Component와 Client Componet의 구분
- data fetching 방법 : getStaticProps -> fetch(URL, { cache : 'force-cache' }
```
## 프로젝트 생성

```
yarn create next-app next-store-site --typescript
```

<br />

## 프로젝트 실행

```
yarn install 
yarn dev
```
