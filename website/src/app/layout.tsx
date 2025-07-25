import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nebula',
  description: 'Network Monitoring & Management for the Modern Era',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Nebula',
    description: 'Network Monitoring & Management for the Modern Era',
    url: 'https://nebula.example',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
