import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { createElement } from 'react';
import HomePage from '@/app/page';

vi.mock('next/image', () => ({
  default: (props: { alt: string }) => createElement('img', { alt: props.alt })
}));

describe('HomePage', () => {
  it('renders core Vecell positioning and CTA', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { name: 'Vecell' })).toBeInTheDocument();
    expect(screen.getByText(/One governed front door/i)).toBeInTheDocument();
    expect(screen.getByText(/The challenges we help primary care solve/i)).toBeInTheDocument();
    expect(screen.getByText(/Choose the detail that matches the job/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Review the request and operating model/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Match each role to the right surface/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Open product/i })).toHaveAttribute(
      'href',
      '/product/how-it-works'
    );
    expect(screen.getByRole('link', { name: /View solutions/i })).toHaveAttribute(
      'href',
      '/solutions'
    );
    expect(screen.getAllByRole('link', { name: /Book a walkthrough/i }).length).toBeGreaterThan(0);
  }, 10000);
});
