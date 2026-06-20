import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { legalPages, navItems } from '@/content/site';

const defaultTestPortalsUrl = 'https://vecells-cloud-trial-portals.onrender.com/test';

export function Footer() {
  const testPortalsUrl = process.env.NEXT_PUBLIC_TEST_PORTALS_URL ?? defaultTestPortalsUrl;

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Logo />
        <p>
          © 2026 Vecell. All rights reserved. Built for the front door of primary care.
        </p>
        <a className="button button-primary footer-test-link" href={testPortalsUrl}>
          Test portals
        </a>
      </div>
      <div className="footer-grid">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} prefetch={false}>
            {item.label}
          </Link>
        ))}
        {legalPages.map((item) => (
          <Link key={item.href} href={item.href} prefetch={false}>
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
