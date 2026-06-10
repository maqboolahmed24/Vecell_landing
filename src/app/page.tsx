import { HomeScrollJourney } from '@/components/HomeScrollJourney';

export const metadata = {
  title: 'The front door operating system for GP practices',
  description:
    'Vecell brings web, phone, booking, pharmacy and admin demand into one governed primary care workflow.'
};

export default function HomePage() {
  return (
    <main className="landing-page">
      <HomeScrollJourney />
    </main>
  );
}
