import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { createElement } from 'react';
import HomePage from '@/app/page';

vi.mock('next/image', () => ({
  default: (props: { alt: string }) => createElement('img', { alt: props.alt })
}));

describe('HomePage', () => {
  it('renders core Vecells positioning and CTA', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { name: 'Vecells' })).toBeInTheDocument();
    expect(screen.getByText(/One governed front door/i)).toBeInTheDocument();
    expect(screen.getByText(/The challenges we help primary care solve/i)).toBeInTheDocument();
    expect(screen.getByText(/One governed request from first contact to closure/i)).toBeInTheDocument();
    expect(screen.getByText(/A living proof layer for every decision/i)).toBeInTheDocument();
    expect(screen.getByTestId('role-showcase')).toBeInTheDocument();
    expect(screen.getByText(/Every endpoint remains part of the same accountable journey/i)).toBeInTheDocument();
    expect(screen.getByText(/Better experiences without breaking the request spine/i)).toBeInTheDocument();
    expect(screen.getByText(/Connect patient access, workforce tools, and partner systems/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Book a walkthrough/i }).length).toBeGreaterThan(0);
  }, 10000);
});
