import Link from 'next/link';
import Image from 'next/image';

interface ILogoProps {
  path?: string;
  width?: number;
}

function Logo({ width = 115, path = '' }: ILogoProps) {
  if (path) {
    return (
      <Link href={path}>
        <Image alt="logo" src="/images/ic-logo-header.png" width={width} height={44} />
      </Link>
    );
  }
  return <Image alt="logo" src="/images/ic-logo-footer.svg" width={width} height={33} />;
}

export default Logo;
