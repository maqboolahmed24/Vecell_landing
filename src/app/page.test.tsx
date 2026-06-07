import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { createElement } from 'react';
import HomePage from '@/app/page';

vi.mock('next/image', () => ({
  default: (props: { alt: string; src: string }) => createElement('img', { alt: props.alt, src: props.src })
}));

describe('HomePage', () => {
  it('renders the operating-layer positioning and wired CTAs', () => {
    const { container } = render(<HomePage />);

    expect(screen.getByRole('heading', { name: /The operating layer for primary care/i })).toBeInTheDocument();
    expect(container.querySelector('.home-hero-media img')).toHaveAttribute(
      'src',
      '/illustrations/vecell-platform-orchestration-hero.png'
    );
    expect(screen.getByText(/One front door\. One live view/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Demand is fragmented/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Build the front door primary care deserves/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /See the flow/i })).toHaveAttribute(
      'href',
      '/workflows'
    );
    expect(screen.getAllByRole('link', { name: /Request a pilot/i })[0]).toHaveAttribute('href', '/pilot#contact');
  }, 10000);
});
