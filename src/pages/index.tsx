import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push('/totalbet/membertotal');
  }, []);
  return <div />;
}
