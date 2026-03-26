import type { Metadata } from 'next';
import { DashboardPage } from '@/modules/dashboard/components/dashboard-page';
import { createPageMetadata } from '@/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Dashboard',
  description: 'Internal workspace dashboard overview.',
  path: '/dashboard',
  indexable: false,
});

export default function DashboardRoute() {
  return <DashboardPage />;
}
