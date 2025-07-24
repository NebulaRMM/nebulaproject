'use client';
import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/docs', label: 'Docs' },
  { href: '/download', label: 'Download' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.brand}>Nebula</a>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <button onClick={() => setDark(!dark)} className={styles.toggle}>
        {dark ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  );
}
