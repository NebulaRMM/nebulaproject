import Hero from '@/components/Hero';

export default function Features() {
  return (
    <div>
      <Hero title="Features" cta="Read Docs" ctaLink="/docs" />
      <section style={{ padding: '20px', textAlign: 'center' }}>
        <p>Nebula brings modern network visibility to security-focused environments.</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>⚡ Automated discovery and SNMP polling</li>
          <li>🌐 Live topology maps with a real-time dashboard</li>
          <li>🔑 Open architecture that developers can extend</li>
        </ul>
      </section>
    </div>
  );
}
