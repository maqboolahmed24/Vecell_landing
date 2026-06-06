import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const currentIndex = items.length - 1;

  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isCurrent = index === currentIndex;

          return (
            <li key={`${item.label}-${index}`}>
              {item.href && !isCurrent ? (
                <Link href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isCurrent ? 'page' : undefined}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
