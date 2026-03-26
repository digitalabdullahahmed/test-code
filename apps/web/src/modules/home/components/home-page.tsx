import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">Production Scaffold</p>
        <h1>Next.js + NestJS workspace</h1>
        <p className="hero-copy">
          App Router stays thin, feature modules stay cohesive, and the backend starts with a
          modular-monolith foundation.
        </p>
        <div className="hero-actions">
          <Link href="/login">
            <Button>Open auth flow</Button>
          </Link>
          <Link href="/dashboard">
            <Button className="secondary-button">Open dashboard</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
