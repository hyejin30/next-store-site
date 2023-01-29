import Link from 'next/link';
import Image from 'next/image';

interface ILogoProps {
  path?: string;
  width?: number;
}

function Logo({ path = '' }: ILogoProps) {
  if (path) {
    return (
      <Link href={path}>
        <Image alt="logo" src="/images/ic-logo-header.png" width={110} height={44} />
      </Link>
    );
  }
  return <Image alt="logo" src="/images/ic-logo-footer.png" width={130} height={40} />;
}

export default Logo;
