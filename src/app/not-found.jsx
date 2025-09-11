"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-green-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
