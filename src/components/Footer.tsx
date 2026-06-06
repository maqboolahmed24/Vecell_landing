import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { legalPages, navItems } from '@/content/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Logo />
        <p>
          Vecell is a governed primary-care demand platform for safer intake, routing,
          operations, and assurance.
        </p>
      </div>
      <div className="footer-grid">
        <div>
          <h2>Site</h2>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Legal</h2>
          {legalPages.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="footer-note">© {new Date().getFullYear()} Vecell. All rights reserved.</p>
    </footer>
  );
}
