import type { Metadata } from 'next';
import { siteConfig } from './site-config';

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  indexable?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = '/',
  indexable = true,
}: MetadataInput): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: indexable
      ? {
          index: true,
          follow: true,
        }
      : {
          index: false,
          follow: false,
        },
  };
}
