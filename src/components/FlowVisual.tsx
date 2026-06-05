import Image from 'next/image';

export function FlowVisual() {
  return (
    <div className="flow-visual">
      <Image
        src="/illustrations/vecell-hero-welcome-v1.png"
        alt="Welcoming primary-care reception scene with patients, family members, and a care team at a calm digital front door."
        width={1672}
        height={941}
        priority
        sizes="(max-width: 760px) 340px, (max-width: 1180px) 90vw, 58vw"
      />
    </div>
  );
}
