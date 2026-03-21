'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function CallbackHandler() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const token = params.get('token');
    const name = params.get('name');
    const role = params.get('role');

    if (token) {
      localStorage.setItem('accessToken', token);
      localStorage.setItem('userName', name || '');
      localStorage.setItem('userRole', role || '');
      router.replace('/admin');
    } else {
      router.replace('/login?error=no_token');
    }
  }, [params, router]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100dvh', fontFamily: 'var(--font-sans)', color: 'var(--color-muted)' }}>
      Signing you in...
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100dvh' }}>Loading...</div>}>
      <CallbackHandler />
    </Suspense>
  );
}
