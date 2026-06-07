import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { configuredSiteUrl, fallbackLocalSiteUrl } from '@/lib/site-url';
import './globals.css';

const socialImage = '/illustrations/vecell-platform-pipeline.png';
const siteUrl = configuredSiteUrl() ?? fallbackLocalSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vecell | The operating layer for primary care',
    template: '%s | Vecell'
  },
  description:
    'Vecell is the operating layer for primary care: one front door, one live view, and every request routed safely.',
  openGraph: {
    title: 'Vecell',
    description:
      'The operating layer for primary care: one front door, one live view, and every request routed safely.',
    url: '/',
    siteName: 'Vecell',
    images: [{ url: socialImage, width: 512, height: 512 }],
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vecell',
    description:
      'The operating layer for primary care: one front door, one live view, and every request routed safely.',
    images: [socialImage]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
