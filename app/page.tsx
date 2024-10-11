'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { nanoid } from 'nanoid';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const newId = nanoid(10);
    router.push(`/note/${newId}`);
  }, [router]);

  return null; // This page doesn't render anything, it just redirects
}