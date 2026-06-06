import { PlatformSectionRedirect } from '@/components/PlatformSectionRedirect';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Product',
  description: 'Platform content now lives inside the Vecell Product page.',
  robots: {
    index: false,
    follow: true
  }
};

export default function PlatformRedirectPage() {
  return <PlatformSectionRedirect />;
}
