import styled from 'styled-components';

interface ILineProps {
  background: string;
  height: number;
}

function Line({ background, height }: ILineProps) {
  return <StyledLine background={background} height={height} />;
}

export default Line;

const StyledLine = styled.div<ILineProps>`
  width: 100%;
  height: ${(props) => props.height}rem;
  background: ${(props) => props.background};
`;
