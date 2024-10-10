'use client';

import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import styles from './Header.module.scss';

export default function Header() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error.message}</div>;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">ScribbleShare</Link>
      </div>
      <nav className={styles.nav}>
        {user ? (
          <>
            <span className={styles.welcome}>Hello, {user.name}!</span>
            <Link href="/api/auth/logout" className={styles.authButton}>Logout</Link>
          </>
        ) : (
          <Link href="/api/auth/login" className={styles.authButton}>Login</Link>
        )}
      </nav>
    </header>
  );
}