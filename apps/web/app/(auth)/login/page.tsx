import type { Metadata } from 'next';
import { LoginPage } from '@/modules/auth/components/login-page';
import { createPageMetadata } from '@/seo/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Login',
  description: 'Access the workspace account area.',
  path: '/login',
  indexable: false,
});

export default function LoginRoute() {
  return <LoginPage />;
}
