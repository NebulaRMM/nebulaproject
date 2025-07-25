import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <Hero title="Network Monitoring & Management for the Modern Era" />
      <section style={{ padding: '20px', textAlign: 'center' }}>
        <p>
          Nebula is a community-driven platform for monitoring and managing
          networks. Automated discovery and SNMP polling feed into dynamic
          topology maps so you always know what's online.
        </p>
        <p>
          Built around a Go API, a lightweight collector agent and a React UI,
          Nebula is open source and designed for security-focused environments.
        </p>
        <p>
          Learn more and contribute on{' '}
          <a href="https://github.com/NebulaRMM/nebula" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </section>
    </div>
  );
}
