import Link from 'next/link';
import Image from 'next/image';

export function Logo({ onClick, priority = false }: { onClick?: () => void; priority?: boolean }) {
  return (
    <Link className="logo" href="/" aria-label="Vecell home" onClick={onClick} prefetch={false}>
      <Image
        className="logo-image"
        src="/brand/vecell-logo.png"
        alt=""
        width={1208}
        height={398}
        priority={priority}
        sizes="136px"
      />
    </Link>
  );
}
