import type { Metadata } from 'next';
import { HomePage } from '@/modules/home/components/home-page';
import { JsonLd } from '@/seo/json-ld';
import { createPageMetadata } from '@/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Workspace',
  description: 'Production-grade Next.js and NestJS workspace scaffold.',
  path: '/',
});

export default function PublicHomeRoute() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Workspace',
          url: 'http://localhost:3000',
        }}
      />
      <HomePage />
    </>
  );
}
