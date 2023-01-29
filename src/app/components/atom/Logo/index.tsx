import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { colors, fontSize } from '@/styles';

interface ILogoProps {
  path?: string;
  width?: number;
}

function Logo({ width = 125, path = '' }: ILogoProps) {
  if (path) {
    return (
      <Link href={path}>
        <Image alt="logo" src="/images/ic-logo-header.png" width={width} height={48} />
      </Link>
    );
  }
  return <Image alt="logo" src="/images/ic-logo-footer.svg" width={width} height={33} />;
}

export default Logo;
