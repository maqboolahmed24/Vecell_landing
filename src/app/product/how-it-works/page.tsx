import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Workflows',
  robots: {
    index: false,
    follow: true
  }
};

export default function LegacyProductPage() {
  redirect('/workflows');
}
