export default function About() {
  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
      <h1>About Nebula</h1>
      <p>
        Nebula is a community-driven network monitoring platform built for security-conscious environments. It combines automated discovery, SNMP polling and dynamic topology mapping to deliver a real-time view of your infrastructure.
      </p>
      <p>
        The project consists of a Go backend API, a lightweight collector for scanning networks and a React-based dashboard. Everything is open source and designed to be extended with plugins.
      </p>
    </div>
  );
}
