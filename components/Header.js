import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <style jsx>{`
        .header {
          display: flex;
          padding: 20px;
          border-bottom: solid 1px #ccc;
        }
      `}</style>
    </div>
  );
}
