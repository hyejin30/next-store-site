'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function NotFound() {
  const { push } = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => push('/'), 5000);
    return () => clearTimeout(timer);
  }, []);

  return <div>요청하신 페이지는 존재하지 않습니다.</div>;
}

export default NotFound;
