import Link from 'next/link';
import styled from 'styled-components';
import { colors, fontSize } from '@/styles';

interface ILogoProps {
  path?: string;
  width?: number;
}

function Logo({ width = 156, path = '' }: ILogoProps) {
  if (path) {
    return (
      <Link href={path}>
        <LogoText width={width}>
          <p>AWESOME</p>
          <p>FOOD STORE</p>
        </LogoText>
      </Link>
    );
  }
  return (
    <LogoText width={width}>
      <p>AWESOME</p>
      <p>FOOD STORE</p>
    </LogoText>
  );
}

export default Logo;

interface IWrapperStyle {
  width: number;
}

const LogoText = styled.div<IWrapperStyle>`
  width: ${(props) => props.width}px;
  font-size: ${fontSize.medium};
  font-weight: 700;
  color: ${colors.BLUE};
`;
