import Link from 'next/link';

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link className="logo" href="/" aria-label="Vecells home" onClick={onClick}>
      <span className="logo-mark" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
      <span className="logo-text">Vecells</span>
    </Link>
  );
}
