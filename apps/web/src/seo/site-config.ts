export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? 'Workspace',
  description: 'Production-grade Next.js and NestJS workspace scaffold.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  locale: 'en_US',
} as const;
