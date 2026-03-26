import type { Metadata } from 'next';
import '../src/styles/globals.css';
import { createPageMetadata } from '@/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Workspace',
  description: 'Production-grade Next.js and NestJS workspace scaffold.',
});

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
