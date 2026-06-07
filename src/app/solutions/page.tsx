import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Platform',
  robots: {
    index: false,
    follow: true
  }
};

export default function LegacySolutionsPage() {
  redirect('/platform');
}
