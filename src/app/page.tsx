import { HomeScrollJourney } from '@/components/HomeScrollJourney';

export const metadata = {
  title: 'The operating layer for primary care',
  description: 'One front door. One live view. Every request routed safely.'
};

export default function HomePage() {
  return (
    <main className="landing-page">
      <HomeScrollJourney />
    </main>
  );
}
