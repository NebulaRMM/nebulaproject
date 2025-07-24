'use client';
import Image from 'next/image';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  cta?: string;
  ctaLink?: string;
}

export default function Hero({ title, cta = 'Get Started', ctaLink = '/docs' }: HeroProps) {
  return (
    <section className={styles.hero}>
      <Image src="/logo.svg" alt="Nebula logo" width={80} height={80} />
      <h1>{title}</h1>
      <a href={ctaLink} className={styles.cta}>{cta}</a>
    </section>
  );
}
