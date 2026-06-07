import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { legalPages, navItems } from '@/content/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Logo />
        <p>
          © 2026 Vecell. All rights reserved. Built for the front door of primary care.
        </p>
      </div>
      <div className="footer-grid">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        {legalPages.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
