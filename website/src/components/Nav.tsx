'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/about', label: 'About' },
  { href: '/docs', label: 'Docs' },
  { href: '/download', label: 'Download' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://github.com/NebulaRMM/nebula', label: 'GitHub', external: true },
];

export default function Nav() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand}>Nebula</Link>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ) : (
              <Link href={link.href}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>
      <button onClick={() => setDark(!dark)} className={styles.toggle}>
        {dark ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  );
}
