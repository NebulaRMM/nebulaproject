import Hero from '@/components/Hero';

export default function Features() {
  return (
    <div>
      <Hero title="Features" cta="Read Docs" ctaLink="/docs" />
      <section style={{ padding: '20px', textAlign: 'center' }}>
        <p>
          Nebula provides enterprise-level network visibility without the
          enterprise price tag. Key capabilities include:
        </p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>⚡ Automated discovery and SNMP polling</li>
          <li>🌐 Dynamic topology maps and real-time dashboards</li>
          <li>🔑 Plugin-friendly architecture for custom modules</li>
          <li>🚀 Lightweight collectors for remote sites</li>
          <li>🛡️ Security-first design with role-based access</li>
          <li>📢 Alerting and notification integrations</li>
          <li>🔍 Simplified troubleshooting with historical data</li>
        </ul>
      </section>
    </div>
  );
}
