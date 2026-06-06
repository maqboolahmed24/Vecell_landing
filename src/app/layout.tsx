import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { configuredSiteUrl, fallbackLocalSiteUrl } from '@/lib/site-url';
import './globals.css';

const socialImage = '/illustrations/vecell-hero-welcome-v1.png';
const siteUrl = configuredSiteUrl() ?? fallbackLocalSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vecell | Governed primary-care demand platform',
    template: '%s | Vecell'
  },
  description:
    'Vecell unifies web, phone, and NHS App primary-care demand into one governed request flow with safety, triage, routing, operations, and assurance.',
  openGraph: {
    title: 'Vecell',
    description:
      'A governed primary-care demand platform for safer intake, routing, operations, and assurance.',
    url: '/',
    siteName: 'Vecell',
    images: [{ url: socialImage, width: 1672, height: 941 }],
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vecell',
    description:
      'A governed primary-care demand platform for safer intake, routing, operations, and assurance.',
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
