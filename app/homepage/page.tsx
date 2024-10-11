'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/app/components/Header/Header';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4 font-sans">Welcome to ScribbleShare</h1>
        <p className="text-xl mb-8 font-sans">Your platform for easy note-taking and sharing</p>
        <div className="space-x-4">
          <Link 
            href="/new-note" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            Create New Note
          </Link>
          <Link 
            href="/my-notes" 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            My Notes
          </Link>
        </div>
      </main>
      <footer className="mt-8 text-center text-gray-500 font-mono py-4">
        <p>&copy; 2024 ScribbleShare. All rights reserved.</p>
      </footer>
    </div>
  );
}