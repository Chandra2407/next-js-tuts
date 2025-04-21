// app/layout.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [inputValue, setInputValue] = useState('');
  const pathname = usePathname();

  return (
    <div>
      {/* Navbar with links */}
      <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/login" style={{ fontWeight: pathname === '/login' ? 'bold' : 'normal' }}>
            Login
          </Link>
          <Link href="/register" style={{ fontWeight: pathname === '/register' ? 'bold' : 'normal' }}>
            Register
          </Link>
        </div>
      </nav>

      {/* Input that maintains state */}
      <div style={{ marginTop: '1rem' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
          style={{ padding: '0.5rem' }}
        />
        <p>Current input value: {inputValue}</p>
      </div>

      {/* Page content that changes */}
      <main style={{ padding: '1rem' }}>
        {children}
      </main>
    </div>
  );
}