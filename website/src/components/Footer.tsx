import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ padding: '20px', textAlign: 'center' }}>
      <p>
        <a href="https://github.com/NebulaRMM/nebula" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
        <Link href="/docs">Docs</Link> |{' '}
        <Link href="/about">About</Link> |{' '}
        <Link href="/contact">Contact</Link>
      </p>
    </footer>
  );
}
