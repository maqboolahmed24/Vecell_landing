'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { navItems } from '@/content/site';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Logo onClick={closeMenu} />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <Link className="button button-ghost" href="/product/how-it-works" onClick={closeMenu}>
          See the request flow
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
        <Link className="button button-primary" href="/contact" onClick={closeMenu}>
          Book a walkthrough
        </Link>
        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav-panel"
            aria-label="Mobile navigation"
            initial={reducedMotion ? false : { opacity: 0, y: -10 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
