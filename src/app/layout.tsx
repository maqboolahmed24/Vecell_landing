import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ScrollJourney } from '@/components/ScrollJourney';
import { configuredSiteUrl, fallbackLocalSiteUrl } from '@/lib/site-url';
import './globals.css';

const socialImage = '/illustrations/vecell-platform-pipeline.png';
const siteUrl = configuredSiteUrl() ?? fallbackLocalSiteUrl();
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap'
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vecell | The front door operating system for GP practices',
    template: '%s | Vecell'
  },
  description:
    'Vecell brings web, phone, booking, pharmacy and admin demand into one governed primary care workflow.',
  openGraph: {
    title: 'Vecell',
    description:
      'The front door operating system for GP practices: one safe workflow for patient demand, routing, ownership and proof.',
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
      'The front door operating system for GP practices: one safe workflow for patient demand, routing, ownership and proof.',
    images: [socialImage]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
        <Header />
        <ScrollJourney />
        {children}
        <Footer />
      </body>
    </html>
  );
}
