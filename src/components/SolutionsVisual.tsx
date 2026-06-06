import Image from 'next/image';

export function SolutionsVisual() {
  return (
    <div className="solutions-visual" role="group" aria-label="Solutions illustration">
      <Image
        src="/illustrations/vecell-solutions-simple.png"
        alt="Simple colorful healthcare surfaces for patient access, clinical work, support, and assurance."
        width={1020}
        height={870}
        priority
        unoptimized
        sizes="(max-width: 760px) 340px, (max-width: 1180px) 560px, 46vw"
      />
    </div>
  );
}
