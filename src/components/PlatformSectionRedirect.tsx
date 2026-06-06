'use client';

import Link from 'next/link';
import { useEffect } from 'react';

const operationsHref = '/product/how-it-works#operations-assurance';

export function PlatformSectionRedirect() {
  useEffect(() => {
    window.location.replace(operationsHref);
  }, []);

  return (
    <main className="redirect-page">
      <p>Platform content now lives on the Product page.</p>
      <Link className="button button-primary" href={operationsHref}>
        Open Product operations
      </Link>
    </main>
  );
}
