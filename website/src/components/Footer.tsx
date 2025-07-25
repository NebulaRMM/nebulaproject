import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ padding: '20px', textAlign: 'center' }}>
      <p>
        <a href="https://github.com">GitHub</a> |{' '}
        <Link href="/docs">Docs</Link> |{' '}
        <Link href="/contact">Contact</Link>
      </p>
    </footer>
  );
}
