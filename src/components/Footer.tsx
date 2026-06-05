import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { legalPages, navItems, officialReferences } from '@/content/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Logo />
        <p>
          Vecells is a governed primary-care demand platform for safer intake, routing,
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
        <div>
          <h2>Reference</h2>
          {officialReferences.map((item) => (
            <a key={item.href} href={item.href} rel="noopener noreferrer" target="_blank">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <p className="footer-note">
        © {new Date().getFullYear()} Vecells. NHS and NHS App references describe integration
        pathways and standards; they do not imply endorsement.
      </p>
    </footer>
  );
}
