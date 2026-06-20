import { render, screen } from '@testing-library/react';
import { createElement } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Footer } from '@/components/Footer';

vi.mock('next/image', () => ({
  default: (props: { alt: string; src: string }) => createElement('img', { alt: props.alt, src: props.src })
}));

describe('Footer', () => {
  it('links to the temporary cloud trial portal launcher', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /Test portals/i })).toHaveAttribute(
      'href',
      'https://vecells-cloud-trial-portals.onrender.com/test'
    );
  });
});
