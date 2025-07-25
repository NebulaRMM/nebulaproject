export default function About() {
  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
      <h1>About Nebula</h1>
      <p>
        Nebula is a community-driven network monitoring platform built for
        security-conscious environments. Automated discovery, SNMP polling and
        dynamic topology mapping provide a real-time view of your network.
      </p>
      <p>
        The project consists of a Go backend API, a lightweight collector for
        scanning networks and a React-based dashboard. Everything is open source
        and designed to be extended with plugins.
      </p>
      <p>
        Key goals of the project include easy deployment, simple integrations
        with third-party tools and a minimal resource footprint. Nebula aims to
        offer enterprise features without the complexity.
      </p>
      <p>
        Visit the{' '}
        <a href="https://github.com/NebulaRMM/nebula" target="_blank" rel="noopener noreferrer">
          NebulaRMM/nebula GitHub repository
        </a>{' '}
        for full documentation and source code.
      </p>
    </div>
  );
}
