import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    window.location.href = '/auth/login';
  }, []);

  return <div />;
}
