# Nebula Website

This directory contains the source for the Nebula project's website built with Next.js.

Nebula itself is an open source network monitoring and management platform. The
core application lives in the
[NebulaRMM/nebula](https://github.com/NebulaRMM/nebula) repository. That repo
includes Go services, a collector agent and this React-based dashboard.

## Development

```bash
cd website
# Install dependencies (may require internet access)
yarn install

# Start local dev server
yarn dev
```

Then open <http://localhost:3000> in your browser.

## Building for Production

```bash
cd website
yarn build
```

The site can be deployed to GitHub Pages, Vercel, or Netlify.
