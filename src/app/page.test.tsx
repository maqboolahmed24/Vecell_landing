import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { createElement } from 'react';
import HomePage from '@/app/page';

vi.mock('next/image', () => ({
  default: (props: { alt: string; src: string }) => createElement('img', { alt: props.alt, src: props.src })
}));

describe('HomePage', () => {
  it('renders the GP practice positioning and wired CTAs', () => {
    const { container } = render(<HomePage />);

    expect(screen.getByRole('heading', { name: /The front door for GP practice demand/i })).toBeInTheDocument();
    expect(container.querySelector('.home-hero-media img')).toHaveAttribute(
      'src',
      '/illustrations/vecell-platform-orchestration-hero.png'
    );
    expect(screen.getByText(/web forms, phone calls, NHS App-ready journeys/i)).toBeInTheDocument();
    expect(screen.getByText(/GP demand is spread across forms, phones and queues/i)).toBeInTheDocument();
    expect(screen.getByText(/A scalable operating layer for modern primary care/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /See how it works/i })).toHaveAttribute(
      'href',
      '/workflows'
    );
    expect(screen.getAllByRole('link', { name: /Request a pilot/i })[0]).toHaveAttribute('href', '/pilot#contact');
  }, 10000);
});
