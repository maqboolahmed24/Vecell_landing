import Link from 'next/link';

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link className="logo" href="/" aria-label="Vecell home" onClick={onClick}>
      <span className="logo-mark" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
      <span className="logo-text">Vecell</span>
    </Link>
  );
}
