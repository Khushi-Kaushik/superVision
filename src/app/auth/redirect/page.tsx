'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OAuth2Redirect() {
  const router = useRouter();

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const res = await fetch('http://localhost:9091/api/auth/access-token', {
          credentials: 'include', // important for sending cookies
        });

        if (!res.ok) throw new Error('Failed to get access token');

        const data = await res.json();
        const accessToken = data.accessToken;

        // Store it safely (in-memory, localStorage, etc.)
        localStorage.setItem('accessToken', accessToken);

        // Redirect to dashboard or protected page
        router.push('/dashboard');
      } catch (err) {
        console.error('OAuth2 Redirect Error:', err);
        router.push('/login?error=oauth_failed');
      }
    };

    fetchAccessToken();
  }, [router]);

  return <p>Signing you in...</p>;
}
