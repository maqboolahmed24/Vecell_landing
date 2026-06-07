import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Assurance',
  robots: {
    index: false,
    follow: true
  }
};

export default function LegacyOperationsAssurancePage() {
  redirect('/assurance');
}
